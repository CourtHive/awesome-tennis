/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Awesome Tennis",
  tagline: "Tennis Resources Online",
  url: "https://courthive.github.io",
  baseUrl: "/awesome-tennis/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "CourtHive",
  projectName: "awesome-tennis",
  themeConfig: {
    navbar: {
      title: "Awesome Tennis",
      logo: {
        alt: "CourtHive",
        src: "img/CourtHive.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Resources",
          position: "left",
        },
        {
          to: "apps/",
          activeBasePath: "apps",
          label: "Apps",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/CourtHive/awesome-tennis",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      /*
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Factory Nodes',
              to: 'docs/',
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
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      */
      copyright: `Copyright © ${new Date().getFullYear()} CourtHive`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
