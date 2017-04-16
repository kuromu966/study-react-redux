import { connect } from 'react-redux';
import FormApp from './FormApp';
export const namespace = "getform";


////////////////////////////////////////////////////////////////////////
// Store
export let State = {
  value: {}
};

function mapStateToProps(state) {
  return {
    value: state[namespace].value,
    url: state[namespace].url,
  };
}


////////////////////////////////////////////////////////////////////////
// Action
function mapDispatchToProps(dispatch) {
  return {
    getTestJSON(url) {
      dispatch({type: `${namespace}_GET`, url: url});
      dispatch({type: 'TEST_FETCH_REQUESTED', url: url})
    },
    clearTestJSON() {
      dispatch({type: `${namespace}_CLEAR`});
    },
  };
}


////////////////////////////////////////////////////////////////////////
// Reducer
export function Reducer(state="", action) {
  switch (action.type) {
    case namespace+"_GET":
      return Object.assign({}, state, {
	url: action.url,
	value: undefined,
      });
    case namespace+"_API_RESULT_SET":
      return Object.assign({}, state, {
	value: action.value,
      });
    case namespace+"_CLEAR":
      return Object.assign({}, state, {
	url: undefined,
	value: undefined,
      });
    default:
      return state;
  }
}


////////////////////////////////////////////////////////////////////////
// Container
export const Container = connect(mapStateToProps, mapDispatchToProps)(FormApp);

