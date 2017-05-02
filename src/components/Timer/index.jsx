import { connect } from 'react-redux';
import FormApp from './FormApp';

export const namespace = "TIMER";

export let State = {
  value: ""
};

export function Reducer(state="", action) {
  switch (action.type) {
    case `${namespace}_UPDATE`:
      return Object.assign({}, state, { value: action.value });
    default:
      return state;
  }
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

const StateKeys= Object.keys(State);
export const Container = connect(
  (state) => {
    let result = {};
    StateKeys.map( (key) => result[key] = state[namespace][key]  );
    return result;
  },
  mapDispatchToProps
)(FormApp);

