import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://nicolinebutler.github.io",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    shikiConfig: {
      langs: [
        "javascript",
        "typescript",
        "css",
        "html",
        "markdown",
        "r",
        "python",
      ],
    },
  },
});
