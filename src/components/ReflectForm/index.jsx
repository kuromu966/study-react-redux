import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import FormApp from './FormApp';
export const namespace = "EFLECT_FORM";


////////////////////////////////////////////////////////////////////////
// Store
export let State = {
  value: null
};


////////////////////////////////////////////////////////////////////////
// Action
function mapDispatchToProps(dispatch) {
  return {
    onClick(value) {
      dispatch({ type:`${namespace}_SEND`, value});
    },
  };
}


export function Reducer(state="", action) {
  switch (action.type) {
    case `${namespace}_SEND`:
      return Object.assign({}, state, {
	value: action.value,
      });
    default:
      return state;
  }
}


////////////////////////////////////////////////////////////////////////
// Container
const StateKeys= Object.keys(State);
export const Container = connect(
  (state) => {
    let result = {};
    StateKeys.map( (key) => result[key] = state[namespace][key]  );
    return result;
  },
  mapDispatchToProps
)(FormApp);



