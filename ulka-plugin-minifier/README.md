# ulka-plugin-minifier

Plugin for ulka static site genrator to minify your static files.

## Installation

```
npm install ulka-plugin-minifier
```

Add `ulka-plugin-minifier` to plugins array in `ulka-config.js`

```js
// ulka-config.js
module.exports = {
    ...
    plugins: [
        ...
        "ulka-plugin-minifier",
    ],
}
```

## Customization

To customize `ulka-plugin-minifier`, you need to pass plugin as object to plugins array.

```js
// ulka-config.js
module.exports = {
    ...
    plugins: [
        ...
        {
            resolve: "ulka-plugin-minifier",
            options: {
                html: {
                    // options accepted by html-minifier-terser
                },
                css: {
                    // options accepted by clean-css
                },
                js: {
                    // options accpeted by terser@0.4.3
                }
            }
        },
    ],
}
```
