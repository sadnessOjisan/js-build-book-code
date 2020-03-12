# style-loader を実験

style-loader が何をしているかを確かめるためのコードです。

ビルド後に bundle.js から CSS を探してみましょう。

```
yarn webpack
```

css 読み込みは raw-loader を使っています(css-loader は使っていない)
