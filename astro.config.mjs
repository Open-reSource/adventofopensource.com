// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://adventofopensource.com',
  integrations: [
    starlight({
      title: 'Advent of Open Source',
      social: {
        github: 'https://github.com/Open-reSource/adventofopensource.com',
        discord: 'https://discord.gg/fpUDwEMGwE',
        'x.com': 'https://x.com/open_resource',
        linkedin: 'https://linkedin.com/company/open-re-source/',
        mastodon: 'https://fosstodon.org/@openresource',
        blueSky: 'https://bsky.app/profile/openresource.dev',
        threads: 'https://www.threads.net/@openresource',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', slug: 'guides/example' },
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
