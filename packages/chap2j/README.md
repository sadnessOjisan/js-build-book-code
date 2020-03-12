# async await を polyfill を含めてトランスパイル

regenerator-runtime も入れてみる

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
