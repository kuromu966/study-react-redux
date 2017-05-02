import { connect } from 'react-redux';
import FormApp from './FormApp';

export const namespace = "GET_FORM";

export let State = {
  value: {},
  url: "",
};

export function Reducer(state="", action) {
  switch (action.type) {
    case `${namespace}_GET`:
      return Object.assign({}, state, { url: action.url, value: undefined });
    case `${namespace}_API_RESULT_SET`:
      return Object.assign({}, state, { value: action.payload });
    case `${namespace}_CLEAR`:
      return Object.assign({}, state, { url: undefined, value: undefined });
    default:
      return state;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTestJSON(url) {
      dispatch({type: `${namespace}_GET`, url: url});
      dispatch({type: 'TEST_JSON_REQUEST', url: url, hook: `${namespace}_API_RESULT_SET`})
    },
    clearTestJSON() {
      dispatch({type: `${namespace}_CLEAR`});
    },
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

