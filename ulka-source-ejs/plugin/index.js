const ejs = require('ejs')

exports.beforeSetup = (
  { info },
  { pages = true, contents = true, ejsOptions = {} } = {}
) => {
  // Dont copy .ejs files to __assets__ while building
  info.ignoreExtensions.push('.ejs')

  // Support for .ejs in pages
  if (pages === true) info.pagesExtensions.push('.ejs')

  // Support for .ejs in contents
  if (contents === true) info.contentsExtensions.push('.ejs')

  // Renderer to use to render ejs to html
  info.renderer['.ejs'] = (raw, context, filename) => {
    const options = { ...ejsOptions, filename, context }

    return ejs.render(raw, context, options)
  }
}
