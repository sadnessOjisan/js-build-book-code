# preset env を入れてみる

babel の変換を preset を用いて、様々なバージョンに対応できるようにします。

```
$ yarn babel src/main.js --out-dir dist
```

ここでは、.browserslistrc は適用せずに、preset-env だけを入れた場合にどうなるのかを見ます。
