import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
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

export type StoryValues = {
  id?: string;
  title: string;
  slug: string;
  summary: string;
  client_context: string;
  challenge: string;
  approach: string;
  outcome: string;
  category: string;
  featured_image: string;
  status: "draft" | "published";
  seo_title: string;
  seo_description: string;
};

const empty: StoryValues = {
  title: "", slug: "", summary: "", client_context: "", challenge: "",
  approach: "", outcome: "", category: "", featured_image: "",
  status: "draft", seo_title: "", seo_description: "",
};

export function StoryForm({ initial }: { initial?: Partial<StoryValues> }) {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const [v, setV] = useState<StoryValues>({ ...empty, ...initial });
  const [autoSlug, setAutoSlug] = useState(!initial?.slug);

  useEffect(() => { if (autoSlug) setV((s) => ({ ...s, slug: slugify(s.title) })); }, [v.title, autoSlug]);

  const save = useMutation({
    mutationFn: async () => {
      if (!v.title.trim()) throw new Error("Title is required");
      if (!v.slug.trim()) throw new Error("Slug is required");
      const payload = {
        title: v.title.trim(),
        slug: v.slug.trim(),
        summary: v.summary || null,
        client_context: v.client_context || null,
        challenge: v.challenge || null,
        approach: v.approach || null,
        outcome: v.outcome || null,
        category: v.category || null,
        featured_image: v.featured_image || null,
        status: v.status,
        seo_title: v.seo_title || null,
        seo_description: v.seo_description || null,
      };
      if (v.id) {
        const { error } = await supabase.from("success_stories").update(payload).eq("id", v.id);
        if (error) throw error;
        return v.id;
      } else {
        const { data, error } = await supabase.from("success_stories").insert(payload).select("id").single();
        if (error) throw error;
        return data.id;
      }
    },
    onSuccess: (id) => {
      qc.invalidateQueries({ queryKey: ["admin-stories"] });
      qc.invalidateQueries({ queryKey: ["admin-counts"] });
      toast.success("Saved");
      navigate({ to: "/admin/success-stories/$id", params: { id } });
    },
    onError: (e) => toast.error((e as Error).message),
  });

  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <Link to="/admin/success-stories" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4 mr-1.5" /> All stories
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

      <h1 className="display-h2 mt-6">{v.id ? "Edit story" : "New success story"}</h1>

      <div className="mt-6 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-5">
          <Field label="Title">
            <Input value={v.title} onChange={(e) => setV({ ...v, title: e.target.value })} />
          </Field>
          <Field label="Slug">
            <div className="flex gap-2">
              <Input value={v.slug} onChange={(e) => { setAutoSlug(false); setV({ ...v, slug: e.target.value }); }} />
              <Button variant="outline" type="button" onClick={() => { setAutoSlug(true); setV({ ...v, slug: slugify(v.title) }); }}>Auto</Button>
            </div>
          </Field>
          <Field label="Short summary">
            <Textarea rows={3} value={v.summary} onChange={(e) => setV({ ...v, summary: e.target.value })} />
          </Field>
          <Field label="Client context">
            <Textarea rows={5} value={v.client_context} onChange={(e) => setV({ ...v, client_context: e.target.value })} />
          </Field>
          <Field label="The challenge">
            <Textarea rows={5} value={v.challenge} onChange={(e) => setV({ ...v, challenge: e.target.value })} />
          </Field>
          <Field label="Our approach">
            <Textarea rows={6} value={v.approach} onChange={(e) => setV({ ...v, approach: e.target.value })} />
          </Field>
          <Field label="The outcome">
            <Textarea rows={5} value={v.outcome} onChange={(e) => setV({ ...v, outcome: e.target.value })} />
          </Field>
        </div>

        <aside className="space-y-5">
          <Field label="Featured image URL">
            <Input value={v.featured_image} onChange={(e) => setV({ ...v, featured_image: e.target.value })} />
            {v.featured_image && (
              <img src={v.featured_image} alt="" className="mt-3 rounded-lg w-full aspect-video object-cover border border-border" />
            )}
          </Field>
          <Field label="Category">
            <Input value={v.category} onChange={(e) => setV({ ...v, category: e.target.value })} />
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

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Label className="text-sm font-medium">{label}</Label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
