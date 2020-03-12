# tsc で React をビルドする

CLI でビルド

```
yarn tsc src/main.tsx --outDir dist --jsx react --lib es2015,dom --module umd && cp src/index.html ./dist
```

```
open dist/index.html
```
