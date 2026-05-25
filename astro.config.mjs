// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://stronyinternetowe.net',
	redirects: {
		'/uslugi/strony-internetowe/': '/uslugi/projektowanie-stron-internetowych/',
		'/uslugi/sklepy-internetowe/': '/uslugi/tworzenie-sklepow-internetowych/',
	},
	integrations: [tailwind({ applyBaseStyles: false })],
	vite: {
		optimizeDeps: {
			noDiscovery: true,
			include: []
		}
	}
});
