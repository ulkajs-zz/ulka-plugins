module.exports = {
  siteMetaData: {
    domain: 'https://ulka-starter-default.netlify.com',
  },
  buildPath: 'build',
  pagesPath: 'pages',
  templatesPath: 'templates',
  contents: [
    {
      path: 'contents',
      generatePath: 'blog',
      name: 'blog',
      template: 'template.ulka',
    },
  ],
  plugins: ['plugin'],
}
