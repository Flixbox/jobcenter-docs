import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://flixbox.github.io',
  	base: '/jobcenter-docs',
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/Flixbox/jobcenter-docs',
			},
			editLink: {
        		baseUrl: 'https://github.com/Flixbox/jobcenter-docs/edit/',
      		},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
