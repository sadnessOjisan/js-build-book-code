# async await をトランスパイル（polyfill 指定あるがライブラリがない)

先の例で必要とされたライブラリのうち、core-js だけ入れてみると失敗する

```
$ yarn add core-js@3
```

babel でコンパイルするとエラー

```
❯ node dist/main.js
internal/modules/cjs/loader.js:796
    throw err;
    ^

Error: Cannot find module 'regenerator-runtime/runtime'
Require stack:
- /100_project/js-build-book-code/chap2i/dist/main.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:793:17)
    at Function.Module._load (internal/modules/cjs/loader.js:686:27)
    at Module.require (internal/modules/cjs/loader.js:848:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at Object.<anonymous> (/100_project/js-build-book-code/chap2i/dist/main.js:7:1)
    at Module._compile (internal/modules/cjs/loader.js:955:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:991:10)
    at Module.load (internal/modules/cjs/loader.js:811:32)
    at Function.Module._load (internal/modules/cjs/loader.js:723:14)
    at Function.Module.runMain (internal/modules/cjs/loader.js:1043:10) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/100_project/js-build-book-code/chap2i/dist/main.js'
  ]
}
```

ちなみに実行もできない

```
$ node dist/main.js

internal/modules/cjs/loader.js:796
    throw err;
    ^

Error: Cannot find module 'core-js/modules/es6.promise'
Require stack:
- /js-build-book-code/chap2h/dist/main.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:793:17)
    at Function.Module._load (internal/modules/cjs/loader.js:686:27)
    at Module.require (internal/modules/cjs/loader.js:848:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at Object.<anonymous> (/js-build-book-code/chap2h/dist/main.js:3:1)
    at Module._compile (internal/modules/cjs/loader.js:955:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:991:10)
    at Module.load (internal/modules/cjs/loader.js:811:32)
    at Function.Module._load (internal/modules/cjs/loader.js:723:14)
    at Function.Module.runMain (internal/modules/cjs/loader.js:1043:10) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/js-build-book-code/chap2h/dist/main.js'
  ]
}
```

dist を見ると、

```
require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

require("regenerator-runtime/runtime");
```

とあり、これらのライブラリが必要
