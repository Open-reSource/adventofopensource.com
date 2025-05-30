// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

// https://astro.build/config
export default defineConfig({
  site: 'https://adventofopensource.com',
  integrations: [
    starlight({
      plugins: [starlightLinksValidator()],
      title: 'Advent of Open Source',
      customCss: [
        './src/styles/custom.css',
      ],
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon-96x96.png',
            size: '96x96',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/svg+xml',
            href: '/favicon.svg',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'shortcut icon',
            href: '/favicon.ico',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
            size: '180x180',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'manifest',
            href: '/site.webmanifest',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'mask-icon',
            href: '/safari-pinned-tab.svg',
            color: '#4a01fe',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'msapplication-TileColor',
            content: '#4a01fe',
          },
        },
      ],
      logo: {
        light: './src/assets/logo.svg',
        dark: './src/assets/logo-dark.svg',
        replacesTitle: true,
      },
      social: [
        {
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/Open-reSource/adventofopensource.com',
				},
				{
					icon: 'discord',
					label: 'Discord',
					href: 'https://discord.gg/fpUDwEMGwE',
				},
				{
					icon: 'x.com',
					label: 'X',
					href: 'https://x.com/open_resource',
				},
				{
					icon: 'linkedin',
					label: 'LinkedIn',
					href: 'https://www.linkedin.com/company/open-re-source/',
				},
				{
					icon: 'mastodon',
					label: 'Mastodon',
					href: 'https://fosstodon.org/@openresource',
				},
				{
					icon: 'blueSky',
					label: 'Blue Sky',
					href: 'https://bsky.app/profile/openresource.dev',
				},
				{
					icon: 'threads',
					label: 'Threads',
					href: 'https://www.threads.net/@openresource',
				},
      ],
      components: {
        Footer: './src/components/Footer.astro',
        Head: './src/components/Head.astro',
        Header: './src/components/Header.astro'
      },
      sidebar: [
        {
          label: 'Advent',
          items: [
            {
              label: 'About',
              slug: 'advent'
            },
            {
              label: 'Week 1: The Snowglobe Foundations',
              collapsed: true,
              items: [
                {
                  label: 'Day 1: The Winter Open Source Village',
                  slug: 'advent/week-1/day-1'
                },
                {
                  label: 'Day 2: Guarding the Gift of Code',
                  slug: 'advent/week-1/day-2'
                },
                {
                  label: 'Day 3: Illuminating the Path',
                  slug: 'advent/week-1/day-3'
                },
                {
                  label: 'Day 4: Building the Spirit of Community',
                  slug: 'advent/week-1/day-4'
                },
                {
                  label: 'Day 5: Building the Foundations of Excellence',
                  slug: 'advent/week-1/day-5'
                },
                {
                  label: 'Day 6: Forging the Tools of Creation',
                  slug: 'advent/week-1/day-6'
                },
                {
                  label: 'Day 7: The Rhythm of Progress',
                  slug: 'advent/week-1/day-7'
                },
              ]
            },
            {
              label: 'Week 2: The Gears of Perfection',
              collapsed: true,
              items: [
                {
                  label: 'Day 8: The Mirror of Perfection',
                  slug: 'advent/week-2/day-8'
                },
                {
                  label: 'Day 9: The Flow of Unbroken Progress',
                  slug: 'advent/week-2/day-9'
                },
                {
                  label: 'Day 10: The Sentinel\'s Vigil',
                  slug: 'advent/week-2/day-10'
                },
                {
                  label: 'Day 11: The Crucible of Validation',
                  slug: 'advent/week-2/day-11'
                },
                {
                  label: 'Day 12: The Nexus of Continuity',
                  slug: 'advent/week-2/day-12'
                },
                {
                  label: 'Day 13: The Symphony of Collaboration',
                  slug: 'advent/week-2/day-13'
                },
                {
                  label: 'Day 14: The Cadence of Contributions',
                  slug: 'advent/week-2/day-14'
                },
              ]
            },
            {
              label: 'Week 3: The Chorus of Contribution',
              collapsed: true,
              items: [
                {
                  label: 'Day 15: The Pulse of the Community',
                  slug: 'advent/week-3/day-15'
                },
                {
                  label: 'Day 16: The Tome of Knowledge',
                  slug: 'advent/week-3/day-16'
                },
                {
                  label: 'Day 17: The Voices of the Commons',
                  slug: 'advent/week-3/day-17'
                },
                {
                  label: 'Day 18: The Hall of Honor',
                  slug: 'advent/week-3/day-18'
                },
                {
                  label: 'Day 19: The Beacon of Knowledge',
                  slug: 'advent/week-3/day-19'
                },
                {
                  label: 'Day 20: The Watcher\'s Lens',
                  slug: 'advent/week-3/day-20'
                },
                {
                  label: 'Day 21: The Multilingual Grove',
                  slug: 'advent/week-3/day-21'
                },
              ]
            },
            {
              label: 'Week 4: The Evergrowing Grove',
              items: [
                {
                  label: 'Day 22: The Well of Enduring Prosperity',
                  slug: 'advent/week-4/day-22'
                },
                {
                  label: 'Day 23: The Bell of Resonance',
                  slug: 'advent/week-4/day-23'
                },
                {
                  label: 'Day 24: The Celestial Compass',
                  slug: 'advent/week-4/day-24'
                },
                {
                  label: 'Day 25: The Gift of the Grove',
                  slug: 'advent/week-4/day-25'
                }
              ]
            },
          ],
        },
      ],
    }),
  ],
});
