# async await をトランスパイル（polyfill なし)

polyfill に関する指定を何も書かずにトランスパイルします。
もちろん動きません（注: トランスパイルはできる）

babel でコンパイル

```
$ yarn babel src/main.js --out-dir dist

$ node dist/main.js
/js-build-book-code/packages/chap2g/dist/main.js:12
  regeneratorRuntime.mark(function _callee(arg) {
  ^

ReferenceError: regeneratorRuntime is not defined
    at /js-build-book-code/packages/chap2g/dist/main.js:12:3
    at Object.<anonymous> (/js-build-book-code/packages/chap2g/dist/main.js:34:2)
    at Module._compile (internal/modules/cjs/loader.js:688:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:699:10)
    at Module.load (internal/modules/cjs/loader.js:598:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:537:12)
    at Function.Module._load (internal/modules/cjs/loader.js:529:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:741:12)
    at startup (internal/bootstrap/node.js:285:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:739:3)
```
