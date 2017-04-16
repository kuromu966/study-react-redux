import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import FormApp from './FormApp';
export const namespace = "reflectform";


////////////////////////////////////////////////////////////////////////
// Store
export let State = {
  value: null
};


////////////////////////////////////////////////////////////////////////
// Action
function send(value) {
  return {
    type: "ReflectForm_SEND",
    value,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    onClick(value) {
      dispatch(send(value));
    },
  };
}


////////////////////////////////////////////////////////////////////////
// Reducer
export function Reducer(state="", action) {
  switch (action.type) {
    case 'ReflectForm_SEND':
      return Object.assign({}, state, {
	value: action.value,
      });
    default:
      return state;
  }
}


function mapStateToProps(state) {
  return {
    value: state.reflectform.value,
  };
}


////////////////////////////////////////////////////////////////////////
// Container
export const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormApp);



