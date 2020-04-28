module.exports = {
  title: '小虎前端',
  tagline: 'The tagline of my site',
  url: 'http://hehudaydayup.club',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'he hu', // Usually your GitHub org/user name.
  projectName: 'hh-blog', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '小虎前端',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {to: '/', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/hehu321',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} My Blog, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/',
        // },
        blog: {
          path: './blog',
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
