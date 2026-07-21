import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getServiceSlugs } from "@/lib/services";
import { getPestSlugs } from "@/lib/pests";
import { getAllPostSlugs } from "@/lib/blog";

// Required for `output: export` (static generation).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/services",
    "/pests",
    "/plans",
    "/service-area",
    "/about",
    "/reviews",
    "/blog",
    "/contact",
    "/quote",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = getServiceSlugs().map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const pestRoutes = getPestSlugs().map((slug) => ({
    url: `${base}/pests/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogRoutes = getAllPostSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...pestRoutes, ...blogRoutes];
}
