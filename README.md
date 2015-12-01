# ExpGolomb [![Build Status](https://travis-ci.org/uupaa/ExpGolomb.svg)](https://travis-ci.org/uupaa/ExpGolomb)

[![npm](https://nodei.co/npm/uupaa.expgolomb.svg?downloads=true&stars=true)](https://nodei.co/npm/uupaa.expgolomb/)

[Exponential-Golomb](https://en.wikipedia.org/wiki/Exponential-Golomb_coding) coding implement.

This module made of [WebModule](https://github.com/uupaa/WebModule).

## Documentation
- [Spec](https://github.com/uupaa/ExpGolomb/wiki/)
- [API Spec](https://github.com/uupaa/ExpGolomb/wiki/ExpGolomb)

## Browser, NW.js and Electron

```js
<script src="<module-dir>/lib/WebModule.js"></script>
<script src="<module-dir>/lib/ExpGolomb"></script>
<script>

ExpGolomb.encode(3)       // -> "00100"
ExpGolomb.decode("00100") // -> 3

</script>
```

## WebWorkers

```js
importScripts("<module-dir>lib/WebModule.js");
importScripts("<module-dir>lib/ExpGolomb");

...
```

## Node.js

```js
require("<module-dir>lib/WebModule.js");
require("<module-dir>lib/ExpGolomb");

...
```

