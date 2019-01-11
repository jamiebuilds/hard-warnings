# hard-warnings

> Throw an error when console.warn/error are called

(Useful for tests if you want to ensure that devs don't ignore `console.warn/error`)

## Install

```sh
npm install hard-warnings
```

## Usage

```js
let hardWarnings = require('hard-warnings')
let uninstall = hardWarnings()

console.warn('You did %d things wrong', 3)
// console: You did 3 things wrong
// ---
// Error: Called `console.warn()` with:
//
// You did 3 things wrong
//
//     at foo (example.js:5:11)
//     at bar (example.js:9:3)
//     at baz (example.js:13:3)
//     at ...

uninstall()

console.warn('You did %d things wrong', 3)
// console: You did 3 things wrong
// (no error)
```

### `hard-warnings/register`

Alternatively to above, you may simply require `hard-warnings/register` and it
will be automagically installed for you.

```js
require('hard-warnings/register')
```
