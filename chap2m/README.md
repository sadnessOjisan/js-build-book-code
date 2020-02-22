# ESLint を利用

no-unused-vars が起きないようにクラス呼び出しを追加した。それによって ESLint がきちんと通る。

```
❯ yarn eslint src/main.js
yarn run v1.21.1
warning package.json: No license field
$ /js-build-book-code/node_modules/.bin/eslint src/main.js
✨  Done in 0.75s.
```
