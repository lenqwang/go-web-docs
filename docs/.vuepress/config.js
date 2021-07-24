// const routes = require('./route')
const sidebar = require('./sidebar')
const title = 'Go Web 编程'

module.exports = {
  title,
  description: title,
  docsDir: 'docs',
  locales: {
    '/': {
      lang: 'zh-CN',
      title,
      description: title,
    }
  },
  themeConfig: {
    smoothScroll: true,
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        nav: [
          { text: '教程', link: '/' },
          { text: '参考资料', link: '/ref' }
        ],
        sidebar
      }
    }
  }
}