module.exports = {
  title: 'Ajay More',
  tagline: 'Full Stack Developer',
  url: 'https://ajaymore.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'ajaymore', // Usually your GitHub org/user name.
  projectName: 'ajaymore.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '@ajaymore',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg'
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left'
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/ajaymore/',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Style Guide',
        //       to: 'docs/doc1'
        //     },
        //     {
        //       label: 'Second Doc',
        //       to: 'docs/doc2'
        //     }
        //   ]
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus'
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus'
        //     }
        //   ]
        // },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ajaymore/'
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/__ajaymore'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Portfolio Built with Docusaurus.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
};
