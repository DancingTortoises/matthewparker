import type { MetadataRoute } from "next";

const baseUrl = "https://www.example.com";

const routes = [
  "",
  "/about",
  "/expertise",
  "/qualification-production-readiness",
  "/speaking-thought-leadership",
  "/resources-insights",
  "/advisory-consulting",
  "/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.85
  }));
}
