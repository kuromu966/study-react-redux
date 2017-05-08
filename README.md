# study-react-redux

## Memo

React、Reduxを用いた勉強用のSource Codeを置いたRepositoryです。NodeにもES6にもWebpackにもあまり触れたことのない段階からstartしたあとの変遷をたどるための記録として残しています。

取り扱い内容は大ざっぱに以下の通りです。

- ES6
- Webpack
- React
- Redux
- [React-Router-Redux](https://github.com/reactjs/react-router-redux)
- [Redux-Saga](https://github.com/redux-saga/redux-saga)
- [Redux-DevTools](https://github.com/zalmoxisus/redux-devtools-extension)
- [AdminLTE](https://almsaeedstudio.com/)

どのような工程を経てここに至ったかは以下のpageで開発日誌風に進めています。

[http://frogwell.hatenablog.jp/archive/category/React](http://frogwell.hatenablog.jp/archive/category/React)

## install

`make setup`を実行してください。行っている内容は`npm install`です。

## Build

* `make` minimizeされたjsとcssを`/dist`以下に生成
* `make css` minimizeされたjsを`/dist`以下に生成
* `make js` minimizeされたcssを`/dist`以下に生成

### Option

* `DEBUG=[0|1]` minimizeのoff/on


## Install

`make install`を実行してください。

### Option

* `DESTDIR=/path/to/dist` 生成先のdirectoryを設定します。defaultは`/usr/local/share/study-react-redux`です。


## Run

実行にはいくつかの方法があります。その前に先に`make`を実行してください。`/dist`が存在しないとerrorが発生することがあります。

### Componentの検証

`make story`を実行してください。storybookが実行され、`http://localhost:3002`でaccess可能です。

### Reduxの検証

`make run`で行います。これにより`webpack-dev-server`と`json-server`が起動します。表示されるpageは`/pages/`以下に配置されたものになります。

それぞれのserverには以下のaddressでaccess可能です。

- `http://localhost:3000` => `webpack-dev-server`によるjsの検証用server
- `http://localhost:3001` => `json-server`によるapi検証用server(`http://localhost:3000/api`以下でproxyしています)



