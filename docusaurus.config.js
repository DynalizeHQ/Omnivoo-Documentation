// @ts-check
// This file runs in Node.js

// docusaurus.config.js (top) - safe prism imports with valid fallback
let lightCodeTheme;
let darkCodeTheme;

function minimalPrismTheme(isDark = false) {
  // Minimal structure required by Docusaurus validation:
  return {
    plain: { color: isDark ? '#f8f8f2' : '#24292e', backgroundColor: isDark ? '#0b0f14' : '#ffffff' },
    styles: [
      // empty styles is fine; this keeps validation happy
    ],
  };
}

try {
  // preferred: use real themes if installed
  lightCodeTheme = require('prism-react-renderer/themes/github');
  darkCodeTheme = require('prism-react-renderer/themes/dracula');
} catch (e) {
  // fallback: minimal valid themes so Docusaurus can start
  lightCodeTheme = minimalPrismTheme(false);
  darkCodeTheme = minimalPrismTheme(true);
  // (still recommended to install prism-react-renderer for proper highlighting)
}


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/omnivoo-logo.png',

  future: {
    v4: true,
  },

  url: 'https://docs.omnivoo.com',
  baseUrl: '/',

  organizationName: 'dynalizehq',
  projectName: 'Omnivoo-Documentation',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/omnivoo-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  // Add search plugin as a plugin (or keep in `themes` if you prefer)
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        // language: ['en', 'zh'],
        // other options...
      },
    ],
  ],
};

module.exports = config; // or `export default config;` if you prefer ESM
