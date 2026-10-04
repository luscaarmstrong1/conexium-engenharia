import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// In Vercel or custom domain environments, basePath is root "/".
// In GitHub Pages (when PUBLIC_BASE_PATH is explicitly set), it defaults to repository subpath.
const siteUrl = process.env.PUBLIC_SITE_URL || "https://conexium-engenharia.vercel.app";
const basePath = process.env.PUBLIC_BASE_PATH !== undefined ? process.env.PUBLIC_BASE_PATH : "";

export default defineConfig({
  site: siteUrl,
  base: basePath || undefined,
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/404/"),
    }),
  ],
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
