# ulka-plugin-autolink-headers

Plugin for ulka static site generator to autolink markdown headers.

## Installation

```bash
npm install ulka-plugin-autolink-headers
```

Add `ulka-plugin-autolink-headers` to plugins array in `ulka-config.js`

```js
// ulka-config.js
module.exports = {
  plugins: ['ulka-plugin-autolink-headers'],
}
```

## Customization

To customize `ulka-plugin-autolink-headers`, you need to pass plugin as object to plugins array.

```javascript
// ulka-config.js
module.exports = {
  plugins: [
    {
      resolve: 'ulka-plugin-autolink-headers',
      options: {
        /* Array of heading levels to apply this plugin on */
        hLevels: [1, 2, 3, 4, 5, 6],

        /* If icon is null then the anchor is not shown */
        icon: `<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,

        headingClassName: 'ulka-heading',
        /* OR (hLevel) => `ulka-heading-${hLevel}`*/

        anchorClassName: 'ulka-heading-anchor',
        /* OR (hLevel) => `ulka-heading-anchor-${hLevel}` */

        slugifyOptions: {
          /* options accepted by slugify (https://github.com/simov/slugify) */
        },
      },
    },
  ],
}
```

You can use the class name to show icon on hover only.

```css
.ulka-heading {
  position: relative;
  margin-left: -20px;
  padding-left: 20px;
}
.ulka-heading-anchor {
  visibility: hidden;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.ulka-heading:hover .ulka-heading-anchor {
  visibility: visible;
}
```

        options: {

        }
