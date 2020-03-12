# async await をトランスパイル（polyfill 指定あるがライブラリがない)

babel.config.js にて polyfill の指定だけします。
もちろん動きません。（注: トランスパイルはできる）

babel でコンパイル

```
$ yarn babel src/main.js --out-dir dist
```

次のような警告が出る

```
WARNING: We noticed you're using the `useBuiltIns` option without declaring a core-js version. Currently, we assume version 2.x when no version is passed. Since this default version will likely change in future versions of Babel, we recommend explicitly setting the core-js version you are using via the `corejs` option.

You should also be sure that the version you pass to the `corejs` option matches the version specified in your `package.json`'s `dependencies` section. If it doesn't, you need to run one of the following commands:

  npm install --save core-js@2    npm install --save core-js@3
  yarn add core-js@2              yarn add core-js@3

Successfully compiled 1 file with Babel.
✨  Done in 0.88s.
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
