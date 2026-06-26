import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Lock, Mail, LogIn } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/site/Logo";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Admin Sign In — Aarambh" },
      { name: "robots", content: "noindex,nofollow" },
      { name: "description", content: "Sign in to the Aarambh admin panel." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/admin", replace: true });
    });
  }, [navigate]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Welcome back!");
        navigate({ to: "/admin", replace: true });
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/admin` },
        });
        if (error) throw error;
        toast.success("Account created. You can sign in now.");
        setMode("signin");
      }
    } catch (err) {
      toast.error((err as Error).message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      <div className="hidden lg:flex flex-col justify-between p-12 hero-bg">
        <Logo />
        <div>
          <h1 className="display-h1">Aarambh Admin</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-md">
            Manage blogs, success stories and contact requests for the Aarambh website.
          </p>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Aarambh Resource Management Solutions</p>
      </div>

      <div className="flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8 flex justify-center">
            <Logo />
          </div>
          <div className="card-elegant p-8">
            <h2 className="font-display text-2xl">{mode === "signin" ? "Sign in" : "Create admin account"}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {mode === "signin"
                ? "Use your admin email and password."
                : "First account becomes the admin automatically."}
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <div className="relative mt-2">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="pl-9" />
                </div>
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative mt-2">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="password" type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} className="pl-9" />
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={busy}>
                {busy ? "Please wait..." : (
                  <>
                    <LogIn className="mr-2 h-4 w-4" /> {mode === "signin" ? "Sign in" : "Create account"}
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-sm text-center text-muted-foreground">
              {mode === "signin" ? (
                <>
                  No account yet?{" "}
                  <button className="text-primary hover:underline" onClick={() => setMode("signup")}>
                    Create the first admin
                  </button>
                </>
              ) : (
                <>
                  Already have one?{" "}
                  <button className="text-primary hover:underline" onClick={() => setMode("signin")}>
                    Sign in
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
