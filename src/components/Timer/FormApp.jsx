import React from 'react';
import PropTypes from 'prop-types';

export default class FormApp extends React.Component {
  render() {
    return (
      <div> Now: {this.props.value}</div>
    );
  }
}


FormApp.propTypes = {
  value: PropTypes.string,
};

