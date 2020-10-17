const fs = require('fs')
const path = require('path')
const generateSiteMap = require('./generateSiteMap')

exports.afterBuild = (
  { info },
  { lastMod = false, changefreq = 'daily', priority = 0.7 } = {}
) => {
  if (info.task !== 'build') return

  const options = {
    lastMod,
    changefreq,
    priority,
  }

  const files = allFiles(info.configs.buildPath, '.html')

  const siteMap = generateSiteMap(files, info.configs, options)

  fs.writeFileSync(path.join(info.configs.buildPath, 'sitemap.xml'), siteMap)
}

function allFiles(dirPath, ext, arrayOfFiles) {
  if (!fs.statSync(dirPath).isDirectory()) {
    return [dirPath]
  }

  const files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(file => {
    const pathTo = path.join(dirPath, file)
    if (fs.statSync(pathTo).isDirectory()) {
      arrayOfFiles = allFiles(pathTo, ext, arrayOfFiles)
    } else {
      if (!ext || file.endsWith(ext)) arrayOfFiles.push(pathTo)
    }
  })

  return arrayOfFiles
}
