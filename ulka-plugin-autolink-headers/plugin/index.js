const slugify = require('slugify')

const defaultSvgIcon = `<svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>`

exports.remarkablePlugin = (
  { md },
  {
    hLevels = [1, 2, 3, 4, 5, 6],
    icon = defaultSvgIcon,
    headingClassName = 'ulka-heading',
    anchorClassName = 'ulka-heading-anchor',
    slugifyOptions = {},
  }
) => {
  md.use(plugin)

  function plugin(md) {
    const heading_open = md.renderer.rules.heading_open

    md.renderer.rules.heading_open = function (tokens, idx, ...rest) {
      const hLevel = tokens[idx].hLevel

      if (!hLevels.includes(hLevel)) {
        return heading_open(tokens, idx, ...rest)
      }

      const headingClass = getClassName(headingClassName, hLevel)
      const anchorClass = getClassName(anchorClassName, hLevel)

      const slugOptions = { lower: true, ...slugifyOptions }
      const slug = slugify(tokens[idx + 1].content, slugOptions)

      let anchor = ''
      if (icon) anchor = `<a class="${anchorClass}" href="#${slug}">${icon}</a>`

      return `<h${hLevel} class="${headingClass}" id="${slug}">${anchor} `
    }
  }
}

function getClassName(className, hLevel) {
  if (typeof className === 'function') {
    return className(hLevel)
  } else {
    return className
  }
}
