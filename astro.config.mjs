// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    site: 'https://stronypoznan.com',
    integrations: [tailwind({ applyBaseStyles: false })],

    vite: {
		optimizeDeps: {
			noDiscovery: true,
			include: []
		}
	},

    output: "hybrid",
    adapter: cloudflare()
});