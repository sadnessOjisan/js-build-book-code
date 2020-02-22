# ESLint + Prettier を利用

ESLint はシングルクオート禁止、Prettier はシングルクオートに設定した。

Prettier で format をする

```
❯ yarn prettier ./src/main.js --write
yarn run v1.19.1
warning package.json: No license field
js-build-book-code/node_modules/.bin/prettier ./src/main.js --write
src/main.js 47ms
✨  Done in 0.35s.
```

Format 後に ESLint をかけると・・・

```
❯ yarn eslint src/main.js
yarn run v1.19.1
warning package.json: No license field
$ /js-build-book-code/node_modules/.bin/eslint src/main.js

/js-build-book-code/chap2o/src/main.js
  1:20  error  Unexpected block statement surrounding arrow body; move the returned value immediately after the `=>`  arrow-body-style
  2:11  error  Missing semicolon                                                                                      semi
  3:2   error  Missing semicolon                                                                                      semi
  5:7   error  Missing semicolon                                                                                      semi

✖ 1 problem (1 error, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

怒られる。

`--fix` オプションをつけると・・・

```
❯ yarn eslint src/main.js --fix
yarn run v1.19.1
warning package.json: No license field
$ /Users/ojisan/Documents/100_project/js-build-book-code/node_modules/.bin/eslint src/main.js --fix
✨  Done in 0.43s.
```

ダブルクオートになる

```
const hoge = () => {
  return 2
}

hoge()
```

このようにルールが衝突することがある。
