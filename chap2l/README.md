# ESLint を利用

設定ファイルを作る。質問は下記のように回答。

```
❯ yarn eslint --init

yarn run v1.21.1
warning package.json: No license field
$ /js-build-book-code/node_modules/.bin/eslint --init
? How would you like to use ESLint? To check syntax and find problems
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? None of these
? Does your project use TypeScript? No
? Where does your code run? Browser
? What format do you want your config file to be in? JavaScript
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

eslint@latest
? Would you like to install them now with npm? Yes
Installing eslint@latest
```

依存ライブラリを入れるように言われるが、まだ eslint しか依存がないのでここでは不要。

実行。

```
> yarn eslint src/main.js
```

lint に失敗するように作っているので失敗する。

```
❯ yarn eslint src/main.js
yarn run v1.21.1
warning package.json: No license field
$ /js-build-book-code/node_modules/.bin/eslint src/main.js

/Users/ojisan/Documents/100_project/js-build-book-code/chap2l/src/main.js
  1:7  error  'Hoge' is defined but never used  no-unused-vars

✖ 1 problem (1 error, 0 warnings)

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
