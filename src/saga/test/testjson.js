import { call, put } from 'redux-saga/effects'
import { getJSON } from './utils.js'

export default function* TestJSON(action) {
  const [payload,error] = yield call(getJSON, action.url);
  const result = {payload, error};

  if(process.env.NODE_ENV !== 'production'){
    if(payload && error === undefined){
      yield put({type: "TEST_JSON_FETCH_SUCCEEDED", response:result});
    }else{
      yield put({type: "TEST_JSON_FETCH_FAILED", response:result});
    }
  }

  if("hook" in action){
    result.type = action.hook;
    yield put(result);
  }else{
    throw new Error('Failed to hook action because dose not define "action.hook".');
  }

}

