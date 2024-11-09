// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://adventofopensource.com',
  integrations: [
    starlight({
      title: 'Advent of Open Source',
      customCss: [
        './src/styles/custom.css',
      ],
      logo: {
        light: './src/assets/logo.svg',
        dark: './src/assets/logo-dark.svg',
        replacesTitle: true,
      },
      social: {
        github: 'https://github.com/Open-reSource/adventofopensource.com',
        discord: 'https://discord.gg/fpUDwEMGwE',
        blueSky: 'https://bsky.app/profile/openresource.dev',
        linkedin: 'https://linkedin.com/company/open-re-source/',
        mastodon: 'https://fosstodon.org/@openresource',
        threads: 'https://www.threads.net/@openresource',
        'x.com': 'https://x.com/open_resource',
      },
      sidebar: [
        {
          label: 'Advent',
          items: [
            {
              label: 'About',
              slug: 'advent'
            }
          ],
        },
      ],
    }),
  ],
});
