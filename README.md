# js-build-book-code

技術書典応援祭で発売した[js-build-book]() のサンプルコードです。

サンプルコードを monorepo で管理しています。

サンプルを利用する場合は各フォルダに移動して、実行してください。

## 各 package の依存を DL する

```
$ yarn install
```

## はじめに
この本は Web フロントエンド開発の環境構築を 1 つ 1 つ丁寧にみていく本です。特 に設定が足りない状態で動かすとどうなるのか、なぜその設定が必要なのかについて踏 み込んでいきます。
環境構築の難しさは設定をどれか 1 つでも間違えると動かないことです。そのため 環境構築をする上では、自分がした 1 つ 1 つの設定が何をしているのかを正確に把握 しなければいけません。
 そこでこの本では暗黙的に「そういうものだから」と思われがちな設定に注目し、その設定がどういうものかを解説します。そのために様々な設定を一つずつ導入し、どの設定を足さなければ動かないのかをなるべくサンプルコードを示しながら解説します。
 
例えば、このような例を扱います。

* babel-cli を使わずにトランスパイル
* @babel/preset-env を使わずにトランスパイル
* ESLint の plugin と extends の役割の違い、またはその例外について • eslint-config-prettier と eslint-plugin-prettier の違い
* css-loader を使わずに style-loader だけを使う
* dotenv-webpack と DefinePlugin の違い
* @testing-library/react と@testing-library/jest-dom の役割の違い

このようにさまざまな概念を比較したり、便利なライブラリを入れない時はどのよう な設定が必要になるか(=そのライブラリは何を解決したか)についてフォーカスした 説明をします。

### 本書の構成
この本は 3 章構成です。

* 第 1 章では、ES6- を用いたプロジェクトのセットアップ方法について解説し ます。
* 第 2 章では、TypeScript を用いたプロジェクトのセットアップ方法について解 説します。
* 第 3 章では TypeScript による React プロジェクトのセットアップ方法について 解説します。

使うツールは以下の通りです。 第 1 章では、

* Babel
* ESLint
* Prettier • Webpack • Jest

第 2 章では、
* TypeScript • ESLint
* Prettier
* Webpack
* Jest

第 3 章では、
* TypeScript • React
* ESLint
* Prettier
* Webpack
* Jest
* react-testing-library

♣ サンプルコードについて
サンプルコードは GitHub で公開しています。monorepo 構成になっており、各フォルダでさまざまな実験をできます。
GitHub: https://github.com/sadnessOjisan/js-build-book-code

また筆者は、

* macOS: Mojave 10.14.6 
* NodeJS: 10.13.1
* yarn: 1.19.0
 
といった環境で動作させています。
– ii –


### サポートページについて
本書の誤字脱字や内容の修正はサポートページで行います。適宜更新があった場合も サポートページ内で告知します。また、質問は Twitter の DM などでいつでも受け付けています。気軽に連絡ください。
サポートページ: XXXXXXXXXX Twitter: @sadnessOjisan

### アンケート
この本は編集や説明の都合で大幅に削除した箇所があります。いつかそういった説明を全部盛り込んだ本を作りたいと考えており、もしよろしければご意見をいただけると幸いです。
アンケート: XXXXXXXX
