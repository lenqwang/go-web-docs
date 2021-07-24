const fsp = require('fs/promises')
const path = require('path')
const config = require('../docs/.vuepress/route')
const result = config.map((item) => {
  // const link = item.children[0].link
  // const index = link.lastIndexOf('/')
  // const routeName = link.slice(0, index)
  // item.children.map(subItem => {
  //   const link = subItem.link
  //   const lastIndex = link.lastIndexOf('/')
  //   const route = link.slice(lastIndex + 1)

  //   return route
  // })

  return {
    title: item.text,
    collapsable: false,
    children: item.children.map(subItem => subItem.link)
  }
})

fsp.writeFile(path.join(__dirname, 'restConfig.js'), JSON.stringify(result, null, 2))