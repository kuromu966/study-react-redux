import React from 'react';
import PropTypes from 'prop-types';

export default class LoadingLayer extends React.Component {
  render() {
    if(!this.props.run) return null;
    return (
      <div className="overlay">
	<i className="fa fa-refresh fa-spin"></i>
      </div>
    );
  }
}


LoadingLayer.propTypes = {
  run: PropTypes.bool,
};
