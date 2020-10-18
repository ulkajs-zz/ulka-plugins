const fs = require('fs')
const path = require('path')
const CleanCSS = require('clean-css')
const htmlMinifier = require('html-minifier-terser').minify
const jsMinifier = require('terser').minify

function allFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath)

  for (const file of files) {
    const pathTo = path.join(dirPath, file)
    if (fs.statSync(pathTo).isDirectory()) {
      arrayOfFiles = allFiles(pathTo, arrayOfFiles)
    } else {
      const ext = path.parse(file).ext
      if (['.html', '.js', '.css'].includes(ext)) {
        arrayOfFiles.push({ path: pathTo, ext: ext })
      }
    }
  }

  return arrayOfFiles
}

exports.afterBuild = ({ info }, { html = {}, css = {}, js = {} } = {}) => {
  if (info.task !== 'build') return

  const buildPath = info.configs.buildPath

  const files = allFiles(buildPath)

  for (const file of files) {
    let data = fs.readFileSync(file.path, 'utf8')

    if (file.ext === '.html') {
      data = htmlMinifier(data, {
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        ...html,
      })
    } else if (file.ext === '.css') {
      data = new CleanCSS({
        ...css,
      }).minify(data).styles
    } else if (file.ext === '.js') {
      data = jsMinifier(data, { ...js }).code
    }

    fs.writeFileSync(file.path, data)
  }
}
