# ESLint を利用

global option を確かめる。

`env`を消すと no-undef で怒られる。

```
❯ yarn eslint src/main.js
yarn run v1.19.1
warning package.json: No license field
$ /js-build-book-code/node_modules/.bin/eslint src/main.js

/js-build-book-code/chap2n/src/main.js
  3:5  error  'window' is not defined  no-undef

✖ 1 problem (1 error, 0 warnings)

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

その後に globals に window を追加する

```
❯ yarn eslint src/main.js
yarn run v1.19.1
warning package.json: No license field
$ js-build-book-code/node_modules/.bin/eslint src/main.js
✨  Done in 0.46s.
```
