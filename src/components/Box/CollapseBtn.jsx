import React from 'react';
import PropTypes from 'prop-types';

export default class CollapseBtn extends React.Component {
  render() {
    let btn = null;
    if(this.props.mode == "yes"){
      btn = 'fa fa-plus';
    }else if(this.props.mode == "no"){
      btn = 'fa fa-minus';
    }else{
      return null;
    }
    return (
      <button type="button" className="btn btn-box-tool" data-widget="collapse">
	<i className={btn}></i>
      </button>
    );
  }
}

CollapseBtn.propTypes = {
  mode: PropTypes.string,
};

