const fsp = require('fs/promises')
const path = require('path')

async function readFileAndGetTitle() {
  const basicPath = path.join(__dirname, '../docs/basic')
  const files = await fsp.readdir(basicPath)
  const configs = []

  for (let file of files) {
    // console.log(file)
    const f = path.join(basicPath, file)
    const data = await fsp.stat(f)

    if (data.isFile()) {
      const content = await fsp.readFile(f)
      const fileRows = content.toString().split('\n')
      let line = ''
      while (line = fileRows.shift()) {
        if (line.startsWith('#')) {
          break
        }
      }

      const matched = /#\s+([\d\.]+)?\s*([\u4e00-\u9fa5\w\s^\r]+)/g.exec(line)
      // console.log(matched)
      const title = (matched?.[1] && !/^\d+/.test(matched?.[1])) ? matched?.[1] : matched?.[2]
      const route = {
        text: title,
        link: `/basic/${file.replace(/\.[^/.]+$/, '')}`
      }
      if (route.text) {
        configs.push(route)
      }
    }
  }

  writeToTargetFile(configs)
}

function writeToTargetFile (configs) {
  const targetPath = path.join(__dirname, '../docs/.vitepress/route.js')
  fsp.writeFile(targetPath, `
module.exports = ${JSON.stringify(configs, null, 2)}  
  `.trim())
}

readFileAndGetTitle().catch(() => {})