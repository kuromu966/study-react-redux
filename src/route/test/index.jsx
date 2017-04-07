import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import FormApp from '/components/ReflectForm';
import HelloApp from '/components/HelloWorld';


/****************************** Action ******************************/
function send(value) {
  return {
    type: "SEND",
    value,
  };
}

/****************************** Reducer ******************************/
function formReducer(state, action) {
  switch (action.type) {
    case 'SEND':
      return Object.assign({}, state, {
	value: action.value,
      });
    default:
      return state;
  }
}

/******************************* Store *******************************/
const initialState = {
  value: null,
};
const store = createStore(
  formReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


/************************* Connect to Redux **************************/
function mapStateToProps(state) {
  return {
    value: state.value,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick(value) {
      dispatch(send(value));
    },
  };
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormApp);


function render(){
  ReactDOM.render(
    <Provider store={store}>
      <HelloApp />
    </Provider>,
    document.querySelector(".content")
  );
  
  
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    document.querySelector('.content2')
  );
}


/****************************** Render *******************************/
render();
