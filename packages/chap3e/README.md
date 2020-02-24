# ts-loader 経由でビルド

tsconfig ないと怒られる。

```
❯ yarn webpack
yarn run v1.19.1
warning package.json: No license field
$ /js-build-book-code/node_modules/.bin/webpack
Hash: 383cecc5501de485ca03
Version: webpack 4.41.6
Time: 1106ms
Built at: 02/24/2020 6:57:31 PM
 1 asset
Entrypoint main = bundle.js
[0] ./src/main.ts 318 bytes {0} [built] [failed] [2 errors]

ERROR in [tsl] ERROR
      TS18002: The 'files' list in config file 'tsconfig.json' is empty.

ERROR in ./src/main.ts
Module build failed (from /js-build-book-code/node_modules/ts-loader/index.js):
Error: error while parsing tsconfig.json
    at Object.loader (/js-build-book-code/node_modules/ts-loader/dist/index.js:19:18)
error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

tsconfig を追加して実行するとうまくいく

```
❯ yarn webpack
yarn run v1.19.1
warning package.json: No license field
$ /js-build-book-code/node_modules/.bin/webpack
Hash: 263af1526f4e5bcc5ce4
Version: webpack 4.41.6
Time: 1384ms
Built at: 02/24/2020 6:58:47 PM
    Asset      Size  Chunks             Chunk Names
bundle.js  1.09 KiB       0  [emitted]  main
Entrypoint main = bundle.js
[0] ./src/main.ts 305 bytes {0} [built]
✨  Done in 3.09s.
```
