import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'


export default class BasePage {
  constructor(saga=undefined){
    this.namespace = [];
    this.reducers = {};
    this.initialState = {};
    this.render = {};
    this.saga = saga;
  }

  _hasNamespace(namespace){
    if(this.namespace.some(x => x == namespace)){
      throw new Error(`Failed to add component because "${namespace}" is duplicated namespace.`);
      return 1;
    }else{
      return 0;
    }
  }

  _setComponent(namespace,reducer,state,target,dom){
    this.namespace.push(namespace);
    if(reducer !== undefined) this.reducers[namespace] = reducer;
    if(state !== undefined) this.initialState[namespace] = state;
    this.render[namespace] = {
      dom: dom,
      bind: target
    };
  }
  
  setContainer(namespace,reducer,state,target,dom){
    if(this._hasNamespace(namespace)) return 0;
    this._setComponent(namespace,reducer,state,target,dom);
    return 1;
  }
  
  setComponent(namespace,target,dom){
    if(this._hasNamespace(namespace)) return 0;
    this._setComponent(namespace,undefined,undefined,target,dom);
    return 1;
  }

  run(){
    let sagaMiddleware = createSagaMiddleware()
    let reducers = this.reducers;
    let initialState = this.initialState;
    let store = createStore(
      combineReducers(reducers),
      initialState,
      compose(
	applyMiddleware(sagaMiddleware),
	(process.env.NODE_ENV !== 'production') ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : undefined
      )
    );
    if(this.saga !== undefined) sagaMiddleware.run(this.saga);

    for(let name in this.render){
      ReactDOM.render(
	<Provider store={store}>
	  {this.render[name].dom}
	</Provider>,
	this.render[name].bind
      );
    }
  }

  
}
