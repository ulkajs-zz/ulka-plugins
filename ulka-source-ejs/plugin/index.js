const fs = require('fs')
const ejs = require('ejs')
const url = require('url')
const path = require('path')

exports.beforeBuild = ({ info, pagesArray }, { ejsOptions = {} } = {}) => {
  const allEjsFiles = allFiles(info.configs.pagesPath)

  for (const file of allEjsFiles) {
    const raw = fs.readFileSync(file, 'utf-8')
    const stats = fs.statSync(file)

    const buildPath = createBuildPath(path.parse(file), info.configs.buildPath)

    const pages = {
      type: 'raw',
      content: raw,
      source: path.relative(info.cwd, file),
      link: getLink(info.configs, buildPath),
      values: { stats },
      buildPath: buildPath,
    }

    ejsOptions.filename = file
    ejsOptions.context = pages

    info.renderer['.ejs'] = (raw, context) => {
      return ejs.render(raw, context, ejsOptions)
    }

    pagesArray.push(pages)
  }
}

function createBuildPath(parsedPath, buildPath) {
  let newBuildPath
  if (parsedPath.name === 'index') {
    newBuildPath = path.join(buildPath, 'index.html')
  } else {
    newBuildPath = path.join(buildPath, parsedPath.name, 'index.html')
  }
  return newBuildPath
}

function getLink(configs, buildPath) {
  const link = path.relative(configs.buildPath, buildPath).slice(0, -10)

  this.link = url.format(link)

  if (!this.link.startsWith('/')) {
    this.link = '/' + this.link
  }

  return this.link
}

function allFiles(dirPath, arrayOfFiles = []) {
  try {
    const files = fs.readdirSync(dirPath)

    files.forEach(file => {
      const pathTo = path.join(dirPath, file)
      if (fs.statSync(pathTo).isDirectory()) {
        arrayOfFiles = allFiles(pathTo, arrayOfFiles)
      } else {
        if (path.parse(file).ext === '.ejs') arrayOfFiles.push(pathTo)
      }
    })

    return arrayOfFiles
  } catch (e) {
    console.log(e.message)
    throw new Error(`Error while finding all .ejs files in ${dirPath}`)
  }
}
