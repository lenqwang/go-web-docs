const routes = require('./route')

module.exports = {
  title: 'Go Web 编程',
  description: 'Go Web 编程',
  themeConfig: {
    docsDir: 'docs',
    nav: [
      { text: '教程', link: '/' },
      // { text: '目录', link: '/preface' },
      { text: '参考资料', link: '/ref' }
    ],
    sidebar: {
      '/': routes,
      '/setup/': routes,
      '/basic/': routes,
      '/web/': routes,
      '/form/': routes,
      '/database/': routes,
      '/session/': routes,
      '/text/': routes,
      '/server/': routes,
      '/secure/': routes,
      '/i18n/': routes,
      '/error/': routes,
      '/deploy/': routes,
      '/how/': routes,
      '/extension/': routes
    }
  }
}