# assert-functions

> Assertion functions for basic JS data types. Unopiniated, simple, with no cruft.

## Install

```bash
npm i assert-functions
```

## Usage

Import any single assertion you need. Available assertions are same as the basic JS data types -- `assertArray`, `assertBigInt`, `assertBoolean`, `assertFunction`, `assertNumber`, `assertObject`, `assertString`, `assertSymbol`, `assertUndefined`.

```js
const { assertNumber, AssertionError } = require('assert-functions');

assertNumber(5);

try {
    assertNumber("6");
} catch (e) {
    if (e instanceof AssertionError) {
        console.log('assertion error!');
    }
}
```

## License

[MIT](http://vjpr.mit-license.org)
