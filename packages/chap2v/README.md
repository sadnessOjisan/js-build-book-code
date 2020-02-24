# jest で import を使えるようにする

```
yarn jest
```

babel-jest は標準で入っているが、肝心の babel とその設定がないと動かないので babel 本体と preset-env を入れる。

それらをいれずに実行すると次のように怒られる。

```
FAIL  src/main.test.js
  ● Test suite failed to run

    Jest encountered an unexpected token

    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

    By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

    Here's what you can do:
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/en/configuration.html

    Details:

    js-build-book-code/packages/chap2v/src/main.test.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){import { hoge } from "./main";
                                                                                                    ^

    SyntaxError: Unexpected token {

      at Runtime.createScriptFromCode (../../node_modules/jest-runtime/build/index.js:1059:14)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.473s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
