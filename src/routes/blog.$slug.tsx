import {
  createFileRoute,
  Link,
  notFound,
} from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Facebook,
  FileText,
  Linkedin,
  Link2,
  Tag,
  Twitter,
  User,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { supabase } from "@/integrations/supabase/client";
import heroBg from "@/assets/bg-img1.png";

export const Route = createFileRoute("/blog/$slug")({
  head: () => ({
    meta: [
      {
        title: "Article — Aarambh Blog",
      },
      {
        name: "description",
        content:
          "Insights on learning, capability and learning and development craft.",
      },
    ],
  }),
  component: BlogDetail,
});

type TableOfContentsItem = {
  id: string;
  text: string;
  level: number;
};

function createHeadingId(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function calculateReadingTime(content: string) {
  const words = content
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(words / 200));
}

function BlogDetail() {
  const { slug } = Route.useParams();

  const {
    data: post,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blog", slug],

    queryFn: async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .maybeSingle();

      if (error) {
        throw error;
      }

      return data;
    },
  });

  const { data: related = [] } = useQuery({
    queryKey: [
      "blogs",
      "related",
      post?.category,
      post?.id,
    ],

    queryFn: async () => {
      if (!post) {
        return [];
      }

      let query = supabase
        .from("blogs")
        .select(
          `
            id,
            title,
            slug,
            excerpt,
            featured_image,
            category,
            tags,
            created_at,
            content
          `,
        )
        .eq("status", "published")
        .neq("id", post.id)
        .order("created_at", {
          ascending: false,
        })
        .limit(3);

      if (post.category) {
        query = query.eq(
          "category",
          post.category,
        );
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      return data ?? [];
    },

    enabled: Boolean(post),
  });

  const readingTime = useMemo(() => {
    return calculateReadingTime(
      post?.content ?? "",
    );
  }, [post?.content]);

  const tableOfContents =
    useMemo<TableOfContentsItem[]>(() => {
      if (!post?.content) {
        return [];
      }

      const headingPattern =
        /^(#{2,3})\s+(.+)$/gm;

      const headings: TableOfContentsItem[] =
        [];

      let match:
        | RegExpExecArray
        | null;

      while (
        (match =
          headingPattern.exec(post.content)) !==
        null
      ) {
        const text = match[2]
          .replace(/[*_`]/g, "")
          .trim();

        headings.push({
          id: createHeadingId(text),
          text,
          level: match[1].length,
        });
      }

      return headings;
    }, [post?.content]);

  const formattedDate = useMemo(() => {
    if (!post?.created_at) {
      return "";
    }

    return new Date(
      post.created_at,
    ).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }, [post?.created_at]);

  const shareArticle = (
    platform:
      | "linkedin"
      | "twitter"
      | "facebook",
  ) => {
    if (typeof window === "undefined") {
      return;
    }

    const currentUrl =
      window.location.href;

    const encodedUrl =
      encodeURIComponent(currentUrl);

    const encodedTitle =
      encodeURIComponent(
        post?.title ?? "Aarambh Article",
      );

    const shareUrls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    };

    window.open(
      shareUrls[platform],
      "_blank",
      "noopener,noreferrer,width=720,height=600",
    );
  };

  const copyArticleLink =
    async () => {
      if (
        typeof window ===
        "undefined" ||
        !navigator.clipboard
      ) {
        return;
      }

      await navigator.clipboard.writeText(
        window.location.href,
      );
    };

  if (isLoading) {
    return (
      <SiteLayout>
        <main className="min-h-screen">
          <section className="container-px mx-auto max-w-7xl py-20">
            <div className="animate-pulse">
              <div className="h-5 w-36 rounded bg-muted" />

              <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
                <div>
                  <div className="h-4 w-32 rounded bg-muted" />

                  <div className="mt-6 h-14 w-full rounded bg-muted" />

                  <div className="mt-3 h-14 w-4/5 rounded bg-muted" />

                  <div className="mt-6 h-5 w-full rounded bg-muted" />

                  <div className="mt-2 h-5 w-3/4 rounded bg-muted" />
                </div>

                <div className="aspect-[16/10] rounded-3xl bg-muted" />
              </div>

              <div className="mt-12 h-[520px] rounded-3xl bg-muted" />
            </div>
          </section>
        </main>
      </SiteLayout>
    );
  }

  if (
    isError ||
    !post
  ) {
    throw notFound();
  }

  const authorName =
    post.author?.trim() ||
    "Aarambh Team";

  const authorInitial =
    authorName.charAt(0).toUpperCase();

  return (
    <SiteLayout>
      <main className="min-h-screen bg-background">
        {/* Article Hero */}
        <section
          className="relative overflow-hidden border-b border-border/50 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        >
          <div className="container-px mx-auto max-w-7xl pb-16 pt-10 md:pb-20 md:pt-14">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/75"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all articles
            </Link>

            <div className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              {/* Article Information */}
              <div>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {formattedDate}
                  </span>

                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 className="h-3.5 w-3.5" />
                    {readingTime} min read
                  </span>
                </div>

                {post.category && (
                  <div className="mt-7">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      {post.category}
                    </span>
                  </div>
                )}

                <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-foreground md:text-5xl lg:text-[3.5rem]">
                  {post.title}
                </h1>

                {post.excerpt && (
                  <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                    {post.excerpt}
                  </p>
                )}

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary ring-1 ring-primary/10">
                    {authorInitial}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <User className="h-3.5 w-3.5 text-muted-foreground" />

                      <p className="text-sm font-semibold text-foreground">
                        By {authorName}
                      </p>
                    </div>

                    <p className="mt-1 text-xs text-muted-foreground">
                      Learning &amp;
                      Development
                      Professionals
                    </p>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative">
                <div className="absolute -inset-5 rounded-[2rem] bg-primary/5 blur-2xl" />

                <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-card shadow-elegant">
                  {post.featured_image ? (
                    <img
                      src={
                        post.featured_image
                      }
                      alt={post.title}
                      className="aspect-[16/10] h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-primary/15 via-background to-primary/5">
                      <FileText className="h-20 w-20 text-primary/25" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="container-px mx-auto max-w-7xl py-12 md:py-16">
          <div className="rounded-3xl border border-border/60 bg-card shadow-elegant">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_290px]">
              {/* Main Content */}
              <div className="min-w-0 px-6 py-8 md:px-10 md:py-12 lg:px-12">
                <div className="prose-aarambh max-w-none">
                  <ReactMarkdown
                    components={{
                      h2: ({ children, ...props }) => {
                        const text = String(children);

                        return (
                          <h2
                            id={createHeadingId(text)}
                            className="scroll-mt-28"
                            {...props}
                          >
                            {children}
                          </h2>
                        );
                      },

                      h3: ({ children, ...props }) => {
                        const text = String(children);

                        return (
                          <h3
                            id={createHeadingId(text)}
                            className="scroll-mt-28"
                            {...props}
                          >
                            {children}
                          </h3>
                        );
                      },

                      strong: ({ children }) => (
                        <strong className="font-semibold text-primary">
                          {children}
                        </strong>
                      ),

                      blockquote: ({ children }) => (
                        <blockquote className="my-8 rounded-2xl border-l-4 border-primary bg-primary/5 px-6 py-5 text-base italic leading-7 text-foreground">
                          {children}
                        </blockquote>
                      ),

                      ul: ({ children }) => (
                        <ul className="my-6 space-y-3">
                          {children}
                        </ul>
                      ),

                      li: ({ children }) => (
                        <li className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                          <span>{children}</span>
                        </li>
                      ),

                      pre: ({ children }) => (
                        <div className="my-8 rounded-2xl border border-primary/15 bg-primary/5 p-6 shadow-sm">
                          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                            Key takeaway
                          </div>

                          <pre className="whitespace-pre-wrap font-sans text-sm leading-7 text-foreground">
                            {children}
                          </pre>
                        </div>
                      ),

                      img: ({ src, alt }) => (
                        <img
                          src={src}
                          alt={alt ?? ""}
                          className="my-8 w-full rounded-2xl border border-border/50 object-cover shadow-sm"
                          loading="lazy"
                        />
                      ),
                    }}
                  >
                    {post.content ?? ""}
                  </ReactMarkdown>
                </div>

                {/* Tags and Share */}
                <div className="mt-12 border-t border-border pt-7">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap items-center gap-2">
                      {(post.tags ?? [])
                        .length >
                        0 && (
                          <>
                            <span className="mr-1 text-sm font-semibold">
                              Tags:
                            </span>

                            {(
                              post.tags ?? []
                            ).map(
                              (
                                currentTag: string,
                              ) => (
                                <span
                                  key={
                                    currentTag
                                  }
                                  className="rounded-full border border-primary/10 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary"
                                >
                                  {
                                    currentTag
                                  }
                                </span>
                              ),
                            )}
                          </>
                        )}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="mr-1 text-sm font-semibold">
                        Share:
                      </span>

                      <button
                        type="button"
                        aria-label="Share on LinkedIn"
                        onClick={() =>
                          shareArticle(
                            "linkedin",
                          )
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/5 text-primary transition hover:bg-primary hover:text-primary-foreground"
                      >
                        <Linkedin className="h-4 w-4" />
                      </button>

                      <button
                        type="button"
                        aria-label="Share on Twitter"
                        onClick={() =>
                          shareArticle(
                            "twitter",
                          )
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/5 text-primary transition hover:bg-primary hover:text-primary-foreground"
                      >
                        <Twitter className="h-4 w-4" />
                      </button>

                      <button
                        type="button"
                        aria-label="Share on Facebook"
                        onClick={() =>
                          shareArticle(
                            "facebook",
                          )
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/5 text-primary transition hover:bg-primary hover:text-primary-foreground"
                      >
                        <Facebook className="h-4 w-4" />
                      </button>

                      <button
                        type="button"
                        aria-label="Copy article link"
                        onClick={
                          copyArticleLink
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/5 text-primary transition hover:bg-primary hover:text-primary-foreground"
                      >
                        <Link2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article Sidebar */}
              <aside className="border-t border-border/60 p-6 md:p-8 lg:border-l lg:border-t-0">
                <div className="space-y-6 lg:sticky lg:top-24">
                  {tableOfContents.length >
                    0 && (
                      <div className="rounded-2xl border border-border/60 bg-background p-6">
                        <h2 className="text-lg font-semibold">
                          On this page
                        </h2>

                        <div className="mt-3 h-0.5 w-8 bg-primary" />

                        <nav className="mt-6">
                          <ul className="space-y-4">
                            {tableOfContents.map(
                              (item) => (
                                <li
                                  key={
                                    item.id
                                  }
                                  className={
                                    item.level ===
                                      3
                                      ? "pl-4"
                                      : ""
                                  }
                                >
                                  <a
                                    href={`#${item.id}`}
                                    className="group flex items-start gap-3 text-sm leading-5 text-muted-foreground transition-colors hover:text-primary"
                                  >
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70 transition group-hover:bg-primary" />

                                    <span>
                                      {
                                        item.text
                                      }
                                    </span>
                                  </a>
                                </li>
                              ),
                            )}
                          </ul>
                        </nav>
                      </div>
                    )}

                  <div className="rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/10 via-primary/5 to-background p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-background text-primary shadow-sm">
                      <FileText className="h-5 w-5" />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold">
                      Explore more
                      insights
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Discover more
                      practical ideas on
                      learning design,
                      capability building
                      and workplace
                      performance.
                    </p>

                    <Link
                      to="/blog"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
                    >
                      View all articles
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>

          {/* Author Card */}
          <div className="mt-6 rounded-3xl border border-border/60 bg-card px-6 py-7 shadow-sm md:px-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 text-3xl font-semibold text-primary">
                {authorInitial}
              </div>

              <div className="flex-1">
                <span className="text-xs text-muted-foreground">
                  About the author
                </span>

                <h3 className="mt-1 text-xl font-semibold">
                  {authorName}
                </h3>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Sharing practical
                  perspectives on
                  learning, capability
                  development and
                  performance-focused
                  workplace experiences.
                </p>

                <Link
                  to="/blog"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
                >
                  View all articles
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {related.length > 0 && (
          <section className="border-t border-border/50 bg-muted/20">
            <div className="container-px mx-auto max-w-7xl py-14 md:py-18">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Continue exploring
                  </span>

                  <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                    Related reading
                  </h2>
                </div>

                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
                >
                  View all articles
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {related.map(
                  (relatedPost) => {
                    const relatedReadingTime =
                      calculateReadingTime(
                        relatedPost.content ??
                        "",
                      );

                    return (
                      <Link
                        key={
                          relatedPost.id
                        }
                        to="/blog/$slug"
                        params={{
                          slug: relatedPost.slug,
                        }}
                        className="group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant-lg"
                      >
                        <div className="relative aspect-[16/9] overflow-hidden bg-primary/5">
                          {relatedPost.featured_image ? (
                            <img
                              src={
                                relatedPost.featured_image
                              }
                              alt={
                                relatedPost.title
                              }
                              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                              loading="lazy"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/15 to-primary/5">
                              <FileText className="h-12 w-12 text-primary/25" />
                            </div>
                          )}

                          {relatedPost.category && (
                            <span className="absolute left-4 top-4 rounded-full bg-background/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary shadow-sm backdrop-blur">
                              {
                                relatedPost.category
                              }
                            </span>
                          )}
                        </div>

                        <div className="p-6">
                          <h3 className="font-display text-xl font-semibold leading-snug transition-colors group-hover:text-primary">
                            {
                              relatedPost.title
                            }
                          </h3>

                          {relatedPost.excerpt && (
                            <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                              {
                                relatedPost.excerpt
                              }
                            </p>
                          )}

                          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border/60 pt-4 text-xs text-muted-foreground">
                            <span className="inline-flex items-center gap-1.5">
                              <CalendarDays className="h-3.5 w-3.5" />

                              {new Date(
                                relatedPost.created_at,
                              ).toLocaleDateString(
                                "en-GB",
                                {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                },
                              )}
                            </span>

                            <span className="inline-flex items-center gap-1.5">
                              <Clock3 className="h-3.5 w-3.5" />
                              {
                                relatedReadingTime
                              }{" "}
                              min read
                            </span>
                          </div>
                        </div>
                      </Link>
                    );
                  },
                )}
              </div>
            </div>
          </section>
        )}
      </main>
    </SiteLayout>
  );
}