import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Trash2, Mail } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/admin/messages")({
  component: MessagesPage,
});

function MessagesPage() {
  const qc = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["admin-messages"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });

  const remove = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("contact_submissions").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin-messages"] });
      toast.success("Deleted");
    },
    onError: (e) => toast.error((e as Error).message),
  });

  return (
    <div>
      <h1 className="display-h2">Contact Messages</h1>
      <p className="mt-2 text-muted-foreground">Submissions from the website contact form.</p>

      <div className="mt-8 space-y-4">
        {isLoading ? (
          <div className="text-muted-foreground">Loading…</div>
        ) : (data ?? []).length === 0 ? (
          <div className="text-muted-foreground">No messages yet.</div>
        ) : (
          (data ?? []).map((m) => (
            <div key={m.id} className="card-elegant p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="font-display text-lg">{m.name}</div>
                  <div className="text-sm text-muted-foreground">
                    <a className="hover:text-primary" href={`mailto:${m.email}`}>{m.email}</a>
                    {m.phone && <> · {m.phone}</>}
                    {m.organisation && <> · {m.organisation}</>}
                  </div>
                  {m.service_interest && (
                    <div className="mt-2 inline-block text-xs px-2 py-1 rounded-full bg-primary-soft text-primary">
                      {m.service_interest}
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    {new Date(m.created_at).toLocaleString()}
                  </span>
                  <Button size="sm" variant="ghost" asChild>
                    <a href={`mailto:${m.email}`}><Mail className="h-4 w-4" /></a>
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => { if (confirm("Delete this message?")) remove.mutate(m.id); }}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </div>
              <p className="mt-4 text-sm whitespace-pre-wrap text-foreground/90">{m.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
