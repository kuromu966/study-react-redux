import React from 'react';
import PropTypes from 'prop-types';

export default class CloseBtn extends React.Component {
  render() {

    /* if(!this.props.mode) return null;*/
    return (
      <button type="button" className="btn btn-box-tool" data-widget="remove">
	<i className="fa fa-times" id="close"></i>
      </button>
    );
  }
}

CloseBtn.propTypes = {
  mode: PropTypes.bool,
};

