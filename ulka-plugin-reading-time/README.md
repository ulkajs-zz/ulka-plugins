## ulka-plugin-reading-time

Adds a medium-like reading time estimate to your ulka posts. Powered by [reading time](https://github.com/ngryman/reading-time).

## Installation

```bash
npm install ulka-plugin-reading-time
```

Add `ulka-plugin-reading-time` to plugins array in ulka-config.js

```js
// ulka-config.js
module.exports = {
    ...
    plugins: [
    ...
    "ulka-plugin-reading-time",
    ],
}
```

## Usage

After the setup, readingTime key will be available in fields.

```js
// values.fields.readingTime
{
    text: '1 min read',
    minutes: 1,
    time: 60000,
    words: 200
}
```

## Customization

To customize `ulka-plugin-reading-time`, you need to pass plugin as object to plugins array.

```js
// ulka-config.js
module.exports = {
    ...
    plugins: [
        ...
        {
            resolve: "ulka-plugin-reading-time",
            options: {
                // options accepted by reading-time (https://github.com/ngryman/reading-time)
            }
        },
    ],
}
```
