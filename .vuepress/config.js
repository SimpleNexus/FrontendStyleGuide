module.exports = {
  base: '/FrontendStyleGuide/',
  title: 'SimpleNexus Frontend Style Guide',
  description: 'SimpleNexus Frontend Style Guide',
  dest: 'docs',
  themeConfig: {
    displayAllHeaders: true,
    sidebar: [
      {
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        sidebarDepth: 2,
        collapsable: false,
        children: [
          '/icons/'
        ]
      }
    ]
  },
  head: [
    ['link', { rel: 'stylesheet', href: '/css/icons.css'}]
  ]
}
