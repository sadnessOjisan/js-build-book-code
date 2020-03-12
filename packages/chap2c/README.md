# @babel/cli に設定ファイルを渡してみる

設定ファイルを書くと変換の振る舞いを変えられることを確認します。

```
$ yarn babel src/main.js --out-dir dist
```

babel.config.js で plugin-transform-arrow-functions を使うように指示.
