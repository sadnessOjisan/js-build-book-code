# async await を polyfill を含めてトランスパイル

先の例で必要とされたライブラリのうち、core-js に加え、regenerator-runtime も入れてみると成功する

```
❯ yarn add regenerator-runtime
```

build

```
❯ yarn babel src/main.js --out-dir dist
```

実行

```
❯ node dist/main.js
Promise { <pending> }
```
