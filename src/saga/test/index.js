import { fork, takeEvery } from 'redux-saga/effects'
import TestJSON from './testjson'
import TestTimer from './testtimer'


function* getHandleRequest() {
  yield takeEvery("TEST_JSON_REQUEST", TestJSON);
}

function* testHandleRequest() {
  while(true){
    yield TestTimer();
  }
}


export default function* Saga() {
  yield fork(getHandleRequest);
  yield fork(testHandleRequest);
}
