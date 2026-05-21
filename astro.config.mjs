// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://vexordesigns.pl',
	integrations: [tailwind()],
	vite: {
		optimizeDeps: {
			noDiscovery: true,
			include: []
		}
	}
});
