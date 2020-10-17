const readingTime = require('reading-time')

module.exports = {
  beforeContentRender: ({ contentData }, options) => {
    contentData.values.fields.readingTime = readingTime(
      contentData.content,
      options
    )
  },
}
