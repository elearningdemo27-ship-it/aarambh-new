import { Link, Outlet, useNavigate, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LayoutDashboard, FileText, Trophy, LogOut, Menu, X, Mail } from "lucide-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Logo } from "@/components/site/Logo";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const NAV = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/admin/blogs", label: "Blogs", icon: FileText, exact: false },
  { to: "/admin/success-stories", label: "Success Stories", icon: Trophy, exact: false },
  { to: "/admin/messages", label: "Messages", icon: Mail, exact: false },
] as const;

export function AdminShell() {
  const navigate = useNavigate();
  const router = useRouter();
  const qc = useQueryClient();
  const [open, setOpen] = useState(false);

  const { data: isAdmin, isLoading } = useQuery({
    queryKey: ["is-admin"],
    queryFn: async () => {
      const { data: user } = await supabase.auth.getUser();
      if (!user.user) return false;
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.user.id)
        .eq("role", "admin")
        .maybeSingle();
      return !!data;
    },
  });

  useEffect(() => {
    if (!isLoading && isAdmin === false) {
      // Signed in but not admin
      supabase.auth.signOut().then(() => navigate({ to: "/auth", replace: true }));
    }
  }, [isAdmin, isLoading, navigate]);

  async function handleLogout() {
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  if (isLoading || !isAdmin) {
    return (
      <div className="min-h-screen grid place-items-center text-muted-foreground">Loading admin…</div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-muted/30">
      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky lg:top-0 inset-y-0 left-0 z-40 w-72 bg-card border-r border-border transition-transform lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 border-b border-border flex items-center justify-between">
          <Logo />
          <button className="lg:hidden p-1" onClick={() => setOpen(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="p-3 space-y-1">
          {NAV.map(({ to, label, icon: Icon, exact }) => (
            <Link
              key={to}
              to={to}
              activeOptions={{ exact }}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-foreground/80 hover:bg-muted"
              activeProps={{ className: "bg-primary text-primary-foreground hover:bg-primary" }}
            >
              <Icon className="h-4 w-4" /> {label}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-0 inset-x-0 p-4 border-t border-border">
          <Button variant="outline" className="w-full" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" /> Sign out
          </Button>
        </div>
      </aside>

      {/* Topbar mobile */}
      <div className="lg:hidden sticky top-0 z-30 bg-card border-b border-border px-4 py-3 flex items-center justify-between">
        <Logo />
        <button onClick={() => setOpen(true)} className="p-2">
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <main className="flex-1 min-w-0">
        <div className="p-6 md:p-10 max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
