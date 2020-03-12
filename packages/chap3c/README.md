# CLI オプジョンを設定ファイルに落とし込む

```
❯ yarn tsc
```

ただし、React の型定義ファイルが DL されていると一緒に巻き込まれて、オプション不足で落ちる。その場合このオプションを使えばトランスパイルできる。

```
{
  "compilerOptions": {
    "lib": ["dom", "es2015"],
    "jsx": "react",
    "outDir": "dist"
  }
}
```
