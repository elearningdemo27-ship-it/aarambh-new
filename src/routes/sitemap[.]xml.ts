import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const supabase = createClient<Database>(
          process.env.SUPABASE_URL!,
          process.env.SUPABASE_PUBLISHABLE_KEY!,
          { auth: { storage: undefined, persistSession: false, autoRefreshToken: false } },
        );

        const [{ data: blogs }, { data: stories }] = await Promise.all([
          supabase.from("blogs").select("slug,updated_at").eq("status", "published"),
          supabase.from("success_stories").select("slug,updated_at").eq("status", "published"),
        ]);

        const entries: { path: string; lastmod?: string; priority?: string }[] = [
          { path: "/", priority: "1.0" },
          { path: "/about", priority: "0.8" },
          { path: "/services", priority: "0.8" },
          { path: "/success-stories", priority: "0.8" },
          { path: "/blog", priority: "0.8" },
          { path: "/contact", priority: "0.7" },
          ...((blogs ?? []).map((b) => ({ path: `/blog/${b.slug}`, lastmod: b.updated_at, priority: "0.6" }))),
          ...((stories ?? []).map((s) => ({ path: `/success-stories/${s.slug}`, lastmod: s.updated_at, priority: "0.6" }))),
        ];

        const urls = entries
          .map((e) =>
            `  <url>\n    <loc>${BASE_URL}${e.path}</loc>${e.lastmod ? `\n    <lastmod>${e.lastmod}</lastmod>` : ""}${e.priority ? `\n    <priority>${e.priority}</priority>` : ""}\n  </url>`,
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
