import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { FileText, Trophy, Mail, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/admin/")({
  component: DashboardPage,
});

function useCounts() {
  return useQuery({
    queryKey: ["admin-counts"],
    queryFn: async () => {
      const [bAll, bPub, sAll, sPub, msgs] = await Promise.all([
        supabase.from("blogs").select("id", { count: "exact", head: true }),
        supabase.from("blogs").select("id", { count: "exact", head: true }).eq("status", "published"),
        supabase.from("success_stories").select("id", { count: "exact", head: true }),
        supabase.from("success_stories").select("id", { count: "exact", head: true }).eq("status", "published"),
        supabase.from("contact_submissions").select("id", { count: "exact", head: true }),
      ]);
      return {
        blogsTotal: bAll.count ?? 0,
        blogsPublished: bPub.count ?? 0,
        blogsDraft: (bAll.count ?? 0) - (bPub.count ?? 0),
        storiesTotal: sAll.count ?? 0,
        storiesPublished: sPub.count ?? 0,
        storiesDraft: (sAll.count ?? 0) - (sPub.count ?? 0),
        messages: msgs.count ?? 0,
      };
    },
  });
}

function Stat({ value, label, accent }: { value: number; label: string; accent?: boolean }) {
  return (
    <div className={`rounded-2xl p-6 border ${accent ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"}`}>
      <div className="text-4xl font-display">{value}</div>
      <div className={`mt-2 text-xs uppercase tracking-widest ${accent ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{label}</div>
    </div>
  );
}

function DashboardPage() {
  const { data } = useCounts();
  const c = data ?? { blogsTotal: 0, blogsPublished: 0, blogsDraft: 0, storiesTotal: 0, storiesPublished: 0, storiesDraft: 0, messages: 0 };
  return (
    <div>
      <h1 className="display-h2">Dashboard</h1>
      <p className="mt-2 text-muted-foreground">Overview of your content and inbox.</p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <Stat value={c.blogsTotal} label="Total blogs" accent />
        <Stat value={c.blogsPublished} label="Published blogs" />
        <Stat value={c.blogsDraft} label="Draft blogs" />
        <Stat value={c.storiesTotal} label="Total success stories" accent />
        <Stat value={c.storiesPublished} label="Published stories" />
        <Stat value={c.storiesDraft} label="Draft stories" />
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-5">
        <Link to="/admin/blogs" className="card-elegant p-6 group">
          <FileText className="h-6 w-6 text-primary" />
          <div className="mt-3 font-display text-lg">Manage Blogs</div>
          <div className="mt-1 text-sm text-muted-foreground">Create, edit and publish articles.</div>
          <div className="mt-4 inline-flex items-center text-sm text-primary">
            Open <ArrowRight className="h-4 w-4 ml-1" />
          </div>
        </Link>
        <Link to="/admin/success-stories" className="card-elegant p-6 group">
          <Trophy className="h-6 w-6 text-primary" />
          <div className="mt-3 font-display text-lg">Manage Stories</div>
          <div className="mt-1 text-sm text-muted-foreground">Add, edit and publish success stories.</div>
          <div className="mt-4 inline-flex items-center text-sm text-primary">
            Open <ArrowRight className="h-4 w-4 ml-1" />
          </div>
        </Link>
        <Link to="/admin/messages" className="card-elegant p-6 group">
          <Mail className="h-6 w-6 text-primary" />
          <div className="mt-3 font-display text-lg">Contact Messages</div>
          <div className="mt-1 text-sm text-muted-foreground">{c.messages} total submissions.</div>
          <div className="mt-4 inline-flex items-center text-sm text-primary">
            Open <ArrowRight className="h-4 w-4 ml-1" />
          </div>
        </Link>
      </div>
    </div>
  );
}
