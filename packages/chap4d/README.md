# webpack で tsx

```
yarn webpack
```

ちなみに、、、

tsconfig がないとこのようなエラーがでる

```
❯ yarn webpack
yarn run v1.19.1
warning package.json: No license field
$ /js-build-book-code/node_modules/.bin/webpack
Hash: 951e2e867f83edebd6c5
Version: webpack 4.41.6
Time: 1040ms
Built at: 02/25/2020 9:50:20 PM
 1 asset
Entrypoint main = bundle.js
[0] ./src/main.tsx 318 bytes {0} [built] [failed] [2 errors]

ERROR in [tsl] ERROR
      TS18002: The 'files' list in config file 'tsconfig.json' is empty.

ERROR in ./src/main.tsx
Module build failed (from /js-build-book-code/node_modules/ts-loader/index.js):
Error: error while parsing tsconfig.json
    at Object.loader (/js-build-book-code/node_modules/ts-loader/dist/index.js:19:18)
Child html-webpack-plugin for "index.html":
     1 asset
    Entrypoint undefined = index.html
    [2] (webpack)/buildin/global.js 472 bytes {0} [built]
    [3] (webpack)/buildin/module.js 497 bytes {0} [built]
        + 2 hidden modules
error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

ちなみに前の章で使った tsconfig を使いまわすとこういうエラーが出る

```
~/Documents/100_project/js-build-book-code/packages/chap4d master*
❯ yarn webpack
yarn run v1.19.1
warning package.json: No license field
$ /Users/ojisan/Documents/100_project/js-build-book-code/node_modules/.bin/webpack
Hash: 6d14903fb45cdf3b7f89
Version: webpack 4.41.6
Time: 2862ms
Built at: 02/25/2020 10:48:31 PM
 1 asset
Entrypoint main = bundle.js
[1] ./src/main.tsx 334 bytes {0} [built]
    + 6 hidden modules

ERROR in ./src/main.tsx
Module not found: Error: Can't resolve './sub' in '/Users/ojisan/Documents/100_project/js-build-book-code/packages/chap4d/src'
 @ ./src/main.tsx 5:12-28

ERROR in /Users/ojisan/Documents/100_project/js-build-book-code/node_modules/react-dom/cjs/react-dom.production.min.js
Module not found: Error: Can't resolve 'object-assign' in '/Users/ojisan/Documents/100_project/js-build-book-code/node_modules/react-dom/cjs'
 @ /Users/ojisan/Documents/100_project/js-build-book-code/node_modules/react-dom/cjs/react-dom.production.min.js 13:39-63
 @ /Users/ojisan/Documents/100_project/js-build-book-code/node_modules/react-dom/index.js
 @ ./src/main.tsx

ERROR in /Users/ojisan/Documents/100_project/js-build-book-code/node_modules/react/cjs/react.production.min.js
Module not found: Error: Can't resolve 'object-assign' in '/Users/ojisan/Documents/100_project/js-build-book-code/node_modules/react/cjs'
 @ /Users/ojisan/Documents/100_project/js-build-book-code/node_modules/react/cjs/react.production.min.js 10:19-43
 @ /Users/ojisan/Documents/100_project/js-build-book-code/node_modules/react/index.js
 @ ./src/main.tsx
Child html-webpack-plugin for "index.html":
     1 asset
    Entrypoint undefined = index.html
    [2] (webpack)/buildin/global.js 472 bytes {0} [built]
    [3] (webpack)/buildin/module.js 497 bytes {0} [built]
        + 2 hidden modules
error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
