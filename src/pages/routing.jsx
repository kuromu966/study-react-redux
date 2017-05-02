import BasePage from './base';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'


export default class RoutingPage extends BasePage{
  constructor(saga){
    super(saga);
    this.namespace.push("routing");
    this.reducers.routing = routerReducer;
  }

  run(){
    const sagaMiddleware = createSagaMiddleware()
    const reducers = this.reducers;
    const initialState = this.initialState;
    const store = createStore(
      combineReducers(reducers),
      initialState,
      compose(
	applyMiddleware(sagaMiddleware),
	(process.env.NODE_ENV !== 'production') ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : undefined
      )
    );
    const history = syncHistoryWithStore(createBrowserHistory(), store);
    if(this.saga !== undefined) sagaMiddleware.run(this.saga);

    for(let name in this.render){
      ReactDOM.render(
	<Provider store={store}>
	  <Router history={history}>
	    {this.render[name].dom}
	  </Router>
	</Provider>,
	this.render[name].bind
      )
    }
  }

  
}
