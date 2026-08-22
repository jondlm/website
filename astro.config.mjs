// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://jondlm.github.io/website/",
  base: "website",
  integrations: [tailwind()],
  redirects: {
    "/blog/life_after_stripe": "/website/blog/why_do_i_work",
  },
});
