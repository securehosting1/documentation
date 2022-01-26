// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
const config = {
  title: 'Botpress Documentation',
  tagline: 'Making Machines Understand Humans',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/BlackSymbol.svg',
  organizationName: 'Botpress/documentation', // Usually your GitHub org/user name.
  projectName: 'botpress/documentation', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '| Docs',
        logo: { 
          alt: 'Botpress logo',
          src: 'img/bp-logo-black.svg',
          srcDark: 'img/bp-logo-white.png'
        },
        items: [
          {
            type: 'doc',
            docId: 'overview/what-is-botpress',
            position: 'left',
            label: 'Overview',
          },
          {
            type: 'doc',
            docId: 'building-chatbots/creating-a-new-bot',
            position: 'left',
            label: 'Building Chatbots',
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
                label: 'The Basics',
                to: '/docs/releases/migrate',
              },
              {
                label: 'Features',
                to: '/docs/features',
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
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Botpress, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = {
  themeConfig: {
    metadata: [{name: 'botpress, chatbot', content: 'documentation, docs'}],
    // This would become <meta name="keywords" content="cooking, blog"> in the generated HTML
  },
};

module.exports = {
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
      switchConfig: {
        darkIcon: '\u{1F319}',
        darkIconStyle: {
          marginLeft: '2px',
        },
        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: '\u{1F602}',
        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
  },
};

module.exports = {
  themeConfig: {
    navbar: {
      items: [
        {
          type: 'docsVersion',
          position: 'right',
          to: '/path',
          label: 'label',
        },
      ],
    },
  },
};

module.exports = {
  themeConfig: {
    navbar: {
      items: [
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
  },
};

module.exports = {
  themeConfig: {
    navbar: {
      hideOnScroll: true,
    },
  },
};

module.exports = {
  themeConfig: {
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 10,
    },
  },
};

module.exports = config;