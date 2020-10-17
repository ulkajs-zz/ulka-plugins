# ulka-plugin-sitemap

Plugin for ulka static site genrator to generate sitemap from generated html files

## Installation

```
npm install ulka-plugin-sitemap
```

Add `ulka-plugin-sitemap` to plugins array in `ulka-config.js`

```js
// ulka-config.js
module.exports = {
    ...
    plugins: [
        ...
        "ulka-plugin-sitemap",
    ],
}
```

## Customization

To customize `ulka-plugin-sitemap`, you need to pass plugin as object to plugins array.

```js
// ulka-config.js
module.exports = {
    ...
    plugins: [
        ...
        {
            resolve: "ulka-plugin-sitemap",
            options: {
                lastmod: false,
                changefreq: "daily",
                priority: 0.7
            }
        },
    ],
}
```
