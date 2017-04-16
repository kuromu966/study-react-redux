import React from 'react';
import PropTypes from 'prop-types';

export default class FormDisplay extends React.Component {
  render() {
    return (
      <div>{this.props.data}</div>
    );
  }
}


FormDisplay.propTypes = {
  data: PropTypes.string,
};


