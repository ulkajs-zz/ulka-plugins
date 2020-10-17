const url = require('url')
const path = require('path')
const fs = require('fs')

const xmlnsMap = {
  xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
  'xmlns:news': 'http://www.google.com/schemas/sitemap-news/0.9',
  'xmlns:xhtml': 'http://www.w3.org/1999/xhtml',
  'xmlns:mobile': 'http://www.google.com/schemas/sitemap-mobile/1.0',
  'xmlns:image': 'http://www.google.com/schemas/sitemap-image/1.1',
  'xmlns:video': 'http://www.google.com/schemas/sitemap-video/1.1',
}

let xmlns = ''
for (const key in xmlnsMap) {
  if (xmlnsMap.hasOwnProperty(key)) {
    const element = xmlnsMap[key]
    xmlns += `${key}="${element}" `
  }
}

const generateSiteMap = (filesPath, configs, options) => {
  return `<?xml version="1.0" encoding="UTF-8"?> 
        <urlset ${xmlns}>
        ${filesPath
          .map(fileLoc => {
            if (!configs.siteMetaData.domain)
              throw new Error('Please provide domain in siteMetaData')

            const lastMod = options.lastMod
              ? `<lastmod>${new Date(
                  fs.statSync(fileLoc).mtime
                ).toISOString()}</lastmod>`
              : ''

            const domain = new URL(configs.siteMetaData.domain)
            let loc = url.resolve(
              domain.href,
              path.relative(configs.buildPath, fileLoc)
            )

            const locArray = loc.split('/')
            locArray.pop()

            loc = locArray.join('/') + '/'

            return `<url> <loc>${loc}</loc> ${lastMod} <changefreq>${options.changefreq}</changefreq> <priority>${options.priority}</priority> </url>`
          })
          .join('\n')}
        </urlset>`
}

module.exports = generateSiteMap
