# css-loader を実験

css-loader の option で modules を true にすると css-module ができる

```
yarn webpack
```

hash に変換された値を className に割り振る。そのために css を module として TS に認識させる

```
declare module "*.css";
```

module として認識した css の中身はこうなる

```
{title: "vH9OUknuYAxIlV62oXFu1"}
```
