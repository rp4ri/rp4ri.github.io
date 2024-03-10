import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from '@astrojs/svelte';
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://rp4ri.github.io",
  integrations: [tailwind(), mdx(), sitemap(), svelte(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
