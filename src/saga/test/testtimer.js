import { call, put } from 'redux-saga/effects'
import { getJSON } from './utils.js'

function sleep(msec) {
  return new Promise(function(resolve, reject){
    setTimeout(resolve, msec);
  });
}

export default function* TestTimer() {
  yield sleep(1000).then(function(){});
  let today = new Date();
  
  yield put({type:"TIMER_UPDATE", value:today.toString()});
}

