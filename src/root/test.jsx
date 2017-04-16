import React from 'react';
import { Route } from 'react-router';

import RoutingPage from '/pages/routing';
import HelloApp from '/components/HelloWorld';
import RouteTestApp from '/components/RouteTest';
import { namespace as ReflectFormNamespace,
	 State as ReflectFormState,
	 Reducer as ReflectFormReducer,
	 Container as ReflectFormContainer } from '/components/ReflectForm';
import { namespace as GetFormNamespace,
	 State as GetFormState,
	 Reducer as GetFormReducer,
	 Container as GetFormContainer } from '/components/GetForm';


////////////////////////////////////////////////////////////////////////
// Redux-Saga
import { call, put, takeEvery } from 'redux-saga/effects'

function getTestJSON(url){
  return fetch(url)
    .then(res => {
      if(res.ok){
	return res.json();
      }else{
	throw new Error(`Failed to fetch "${res.url}". ${res.status} ${res.statusText}`);
      }
    })
    .then(payload => ([payload, undefined]))
    .catch(error => ([undefined, error]));
}

function* fetchJSON(action) {
  const [payload,error] = yield call(getTestJSON, action.url);
  if(payload && error === undefined){
    yield put({type: "TEST_FETCH_SUCCEEDED", payload: payload, error: error});
    yield put({type: "getform_API_RESULT_SET", value: payload});
  }else{
    yield put({type: "TEST_FETCH_FAILED", payload: payload, error: error});
    yield put({type: "getform_API_RESULT_SET", value: {message:error}});
  }
}

function* mySaga() {
  yield takeEvery("TEST_FETCH_REQUESTED", fetchJSON);
}


////////////////////////////////////////////////////////////////////////
// Rendering
let page = new RoutingPage(mySaga);
page.setComponent("hello_app",document.querySelector('.content'), <HelloApp />);
page.setContainer(ReflectFormNamespace,ReflectFormReducer,ReflectFormState,
		  document.querySelector('.content2'),
		  <ReflectFormContainer />
);
page.setComponent("router_app",document.querySelector('.router'),
		  <Route path="/" component={RouteTestApp} />,
		  true);
page.setContainer(GetFormNamespace,GetFormReducer,GetFormState,
		  document.querySelector(".saga"),
		  <GetFormContainer />
);
page.run();

