import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  readingTime: string;
};

export type Post = PostMeta & { content: string };

function ensureDir(): boolean {
  return fs.existsSync(BLOG_DIR);
}

/** All post slugs (filenames without .mdx). */
export function getAllPostSlugs(): string[] {
  if (!ensureDir()) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

function readPost(slug: string): Post | null {
  const file = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const words = content.split(/\s+/).length;
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? "",
    author: data.author ?? "My Guys Pest Control",
    category: data.category ?? "Pest Tips",
    readingTime: `${Math.max(1, Math.round(words / 200))} min read`,
    content,
  };
}

/** Full post by slug (with MDX content). */
export function getPost(slug: string): Post | null {
  return readPost(slug);
}

/** All posts, newest first (metadata + content). */
export function getAllPosts(): Post[] {
  return getAllPostSlugs()
    .map(readPost)
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
