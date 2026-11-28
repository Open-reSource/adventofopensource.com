// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import deramond from '@deramond.dev/astro/integration';

// The top bar's numbered links, on the site's own pages and, as the docs tabs, on the days' pages.
const nav = [
	{ label: 'Advent', href: '/advent/' },
	{ label: 'Day 1', href: '/advent/week-1/day-1/' },
	{ label: 'Open {re}Source', href: 'https://openresource.dev' },
];

// https://astro.build/config
export default defineConfig({
	site: 'https://adventofopensource.com',
	integrations: [
		mdx(),
		sitemap(),
		deramond({
			site: {
				name: 'Advent of Open Source',
				description:
					'A community-driven event: a challenge a day in December, in three tracks, to introduce newcomers to open source and help every participant create or enhance their repositories.',
			},
			brand: {
				mark: './src/brand/mark.svg',
				favicons: './src/brand/favicons/',
				accounts: [
					{ label: 'GitHub', href: 'https://github.com/Open-reSource/adventofopensource.com' },
					{ label: 'Discord', href: 'https://discord.gg/fpUDwEMGwE' },
					{ label: 'Bluesky', href: 'https://bsky.app/profile/openresource.dev' },
					{ label: 'Mastodon', href: 'https://fosstodon.org/@openresource' },
					{ label: 'LinkedIn', href: 'https://www.linkedin.com/company/open-re-source/' },
					{ label: 'X', href: 'https://x.com/open_resource' },
					{ label: 'Threads', href: 'https://www.threads.net/@openresource' },
				],
				// The home page's JSON-LD names the organisation behind the event; the accounts above are its own.
				identity: { type: 'Organization', name: 'Open {re}Source', url: 'https://openresource.dev/' },
				twitter: '@JulienDeramond',
			},
			nav,
			footer: {
				columns: [
					{
						title: 'Advent',
						links: [
							{ label: 'About', href: '/advent/' },
							{ label: 'Day 1', href: '/advent/week-1/day-1/' },
							{ label: 'Day 25', href: '/advent/week-4/day-25/' },
						],
					},
					{
						title: 'Community',
						links: [
							{ label: 'Open {re}Source', href: 'https://openresource.dev' },
							{ label: 'Become a sponsor', href: 'https://github.com/sponsors/Open-reSource' },
							{ label: 'Cookie policy', href: '/cookie-policy/' },
						],
					},
				],
				copyright: '2024-present © Open {re}Source',
				meta: 'An Open {re}Source event',
			},
			docs: {
				route: '',
				status: false,
				tabs: nav,
				edit: { repo: 'Open-reSource/adventofopensource.com' },
				sidebar: [
					{ label: 'Advent', items: ['advent'] },
					{ label: 'Week 1: The Snowglobe Foundations', items: ['advent/week-1/day-1', 'advent/week-1/day-2', 'advent/week-1/day-3', 'advent/week-1/day-4', 'advent/week-1/day-5', 'advent/week-1/day-6', 'advent/week-1/day-7'] },
					{ label: 'Week 2: The Gears of Perfection', items: ['advent/week-2/day-8', 'advent/week-2/day-9', 'advent/week-2/day-10', 'advent/week-2/day-11', 'advent/week-2/day-12', 'advent/week-2/day-13', 'advent/week-2/day-14'] },
					{ label: 'Week 3: The Chorus of Contribution', items: ['advent/week-3/day-15', 'advent/week-3/day-16', 'advent/week-3/day-17', 'advent/week-3/day-18', 'advent/week-3/day-19', 'advent/week-3/day-20', 'advent/week-3/day-21'] },
					{ label: 'Week 4: The Evergrowing Grove', items: ['advent/week-4/day-22', 'advent/week-4/day-23', 'advent/week-4/day-24', 'advent/week-4/day-25'] },
				],
			},
			og: {
				name: 'Advent of Open Source',
				title: 'Twenty-five days',
				accent: 'of open source.',
				subtitle: 'A challenge a day, in three tracks, to create or enhance your repositories.',
			},
			// Light, Dark and Auto. The event's winter colours override the paper look's custom properties in site.css.
			look: 'paper',
			css: ['./src/styles/site.css'],
			head: [
				{ tag: 'meta', attrs: { name: 'twitter:site', content: '@open_resource' } },
				{ tag: 'meta', attrs: { name: 'fediverse:creator', content: '@openresource@fosstodon.org' } },
			],
		}),
	],
});
