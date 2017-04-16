import React from 'react';
import PropTypes from 'prop-types';


export default class RouteTestApp extends React.Component {
  getChildContext() {
    return {
      location: this.props.location
    }
  }
  render() {
    return (
      <Child />
    );
  }
}


RouteTestApp.childContextTypes = {
  location: PropTypes.object,
};


class Child extends React.Component {
  render() {
    return (
      <div>
	react-router-redux test: current path = "{this.context.location.pathname}"
      </div>
    );
  }
}


Child.contextTypes = {
  location: PropTypes.object,
};


