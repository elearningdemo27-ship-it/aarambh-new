import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { ArrowLeft, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { slugify } from "@/lib/slug";
import { Link } from "@tanstack/react-router";

export type BlogValues = {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  author: string;
  category: string;
  tags: string;
  status: "draft" | "published";
  seo_title: string;
  seo_description: string;
};

const empty: BlogValues = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  featured_image: "",
  author: "",
  category: "",
  tags: "",
  status: "draft",
  seo_title: "",
  seo_description: "",
};

export function BlogForm({ initial }: { initial?: Partial<BlogValues> }) {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const [v, setV] = useState<BlogValues>({ ...empty, ...initial });
  const [autoSlug, setAutoSlug] = useState(!initial?.slug);

  useEffect(() => { if (autoSlug) setV((s) => ({ ...s, slug: slugify(s.title) })); }, [v.title, autoSlug]);

  const save = useMutation({
    mutationFn: async () => {
      if (!v.title.trim()) throw new Error("Title is required");
      if (!v.slug.trim()) throw new Error("Slug is required");
      const payload = {
        title: v.title.trim(),
        slug: v.slug.trim(),
        excerpt: v.excerpt || null,
        content: v.content || null,
        featured_image: v.featured_image || null,
        author: v.author || null,
        category: v.category || null,
        tags: v.tags ? v.tags.split(",").map((t) => t.trim()).filter(Boolean) : [],
        status: v.status,
        seo_title: v.seo_title || null,
        seo_description: v.seo_description || null,
      };
      if (v.id) {
        const { error } = await supabase.from("blogs").update(payload).eq("id", v.id);
        if (error) throw error;
        return v.id;
      } else {
        const { data, error } = await supabase.from("blogs").insert(payload).select("id").single();
        if (error) throw error;
        return data.id;
      }
    },
    onSuccess: (id) => {
      qc.invalidateQueries({ queryKey: ["admin-blogs"] });
      qc.invalidateQueries({ queryKey: ["admin-counts"] });
      toast.success("Saved");
      navigate({ to: "/admin/blogs/$id", params: { id } });
    },
    onError: (e) => toast.error((e as Error).message),
  });

  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <Link to="/admin/blogs" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4 mr-1.5" /> All blogs
        </Link>
        <div className="flex gap-2">
          <Select value={v.status} onValueChange={(s) => setV({ ...v, status: s as "draft" | "published" })}>
            <SelectTrigger className="w-36"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="published">Published</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={() => save.mutate()} disabled={save.isPending}>
            <Save className="h-4 w-4 mr-2" /> {save.isPending ? "Saving…" : "Save"}
          </Button>
        </div>
      </div>

      <h1 className="display-h2 mt-6">{v.id ? "Edit blog" : "New blog"}</h1>

      <div className="mt-6 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-5">
          <Field label="Title">
            <Input value={v.title} onChange={(e) => setV({ ...v, title: e.target.value })} placeholder="Article title" />
          </Field>
          <Field label="Slug" hint="URL: /blog/<slug>">
            <div className="flex gap-2">
              <Input value={v.slug} onChange={(e) => { setAutoSlug(false); setV({ ...v, slug: e.target.value }); }} />
              <Button variant="outline" type="button" onClick={() => { setAutoSlug(true); setV({ ...v, slug: slugify(v.title) }); }}>Auto</Button>
            </div>
          </Field>
          <Field label="Excerpt">
            <Textarea rows={3} value={v.excerpt} onChange={(e) => setV({ ...v, excerpt: e.target.value })} />
          </Field>
          <Field label="Content (Markdown supported)">
            <Textarea rows={18} className="font-mono text-sm" value={v.content} onChange={(e) => setV({ ...v, content: e.target.value })} />
          </Field>
        </div>

        <aside className="space-y-5">
          <Field label="Featured image URL">
            <Input value={v.featured_image} onChange={(e) => setV({ ...v, featured_image: e.target.value })} placeholder="https://…" />
            {v.featured_image && (
              <img src={v.featured_image} alt="" className="mt-3 rounded-lg w-full aspect-video object-cover border border-border" />
            )}
          </Field>
          <Field label="Author">
            <Input value={v.author} onChange={(e) => setV({ ...v, author: e.target.value })} />
          </Field>
          <Field label="Category">
            <Input value={v.category} onChange={(e) => setV({ ...v, category: e.target.value })} />
          </Field>
          <Field label="Tags (comma separated)">
            <Input value={v.tags} onChange={(e) => setV({ ...v, tags: e.target.value })} />
          </Field>
          <div className="rounded-2xl border border-border bg-card p-4 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">SEO</div>
            <Field label="SEO title">
              <Input value={v.seo_title} onChange={(e) => setV({ ...v, seo_title: e.target.value })} />
            </Field>
            <Field label="SEO description">
              <Textarea rows={3} value={v.seo_description} onChange={(e) => setV({ ...v, seo_description: e.target.value })} />
            </Field>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <Label className="text-sm font-medium">{label}</Label>
      {hint && <p className="text-xs text-muted-foreground mt-0.5">{hint}</p>}
      <div className="mt-2">{children}</div>
    </div>
  );
}
