# ulka-source-ejs

Plugin for ulka static site genrator to generate html from ejs files.

## Installation

```
npm install ulka-source-ejs
```

Add `ulka-source-ejs` to plugins array in `ulka-config.js`

```js
// ulka-config.js
module.exports = {
    ...
    plugins: [
        ...
        "ulka-source-ejs",
    ],
}
```

## Customization

To customize `ulka-source-ejs`, you need to pass plugin as object to plugins array.

```js
// ulka-config.js
module.exports = {
    ...
    plugins: [
        ...
        {
            resolve: "ulka-source-ejs",
            options: {
               ejsOptions: {
                   // options accepted by ejs (filename and context options are ignored here)
               }
            }
        },
    ],
}
```
