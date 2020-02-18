# ESLint を利用

```
> yarn eslint src/main.js
```

設定ファイルがないとエラーが出る。

```
❯ yarn eslint src/main.js
yarn run v1.21.1
warning package.json: No license field
$ /js-build-book-code/node_modules/.bin/eslint src/main.js

Oops! Something went wrong! :(

ESLint: 6.8.0.

ESLint couldn't find a configuration file. To set up a configuration file for this project, please run:

    eslint --init

ESLint looked for configuration files in /Users/ojisan/Documents/100_project/js-build-book-code/chap2k/src and its ancestors. If it found none, it then looked in your home directory.

If you think you already have a configuration file or if you need more help, please stop by the ESLint chat room: https://gitter.im/eslint/eslint

error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
