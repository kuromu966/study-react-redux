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

どのような工程を経てここに至ったかは以下のpageで開発日誌風に進めています。

[http://frogwell.hatenablog.jp/archive/category/React](http://frogwell.hatenablog.jp/archive/category/React)

## install

installはnpmを用いて`npm install`してください。

## run

実行は`make run`で行います。以後`/src`以下のfileが編集される度にrecompileされます。

localでwebserverが2つ起動します。

- `http://localhost:3000` => `webpack-dev-server`によるjsの検証用server
- `http://localhost:3004` => `json-server`によるapi検証用server(`http://localhost:3000/api`以下でproxyしています)


## compile

`make` or `make DEBUG=1`



