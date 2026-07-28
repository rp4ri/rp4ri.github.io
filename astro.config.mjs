// @ts-check

import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://rp4ri.github.io",
	integrations: [
		mdx(),
		sitemap(),
		svelte(),
		icon(),
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
		build: {
			// Vite 8 (Astro 7) changed the default CSS minifier, and the new one
			// keeps Tailwind's `color-mix(in oklab, ...)` as `oklab(...)` instead of
			// folding it down to a plain hex color. Chromium renders text in a
			// non-sRGB color space through a different blending path, which makes
			// every `text-[#FFF]/NN` string ~5/255 lighter than on the live site.
			// esbuild (the previous default) folds it back to `#ffffff8c`, keeping
			// the rendering byte-identical. Drop this line if the shift is fine.
			cssMinify: "esbuild",
		},
	},
});
