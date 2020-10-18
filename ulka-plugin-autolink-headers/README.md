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
        icon: `<svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>`,

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

You can use the className to do some styling to show icon on hover only.

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
