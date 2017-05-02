import React from 'react';
import PropTypes from 'prop-types';
import CollapseBtn from './CollapseBtn'
import CloseBtn from './CloseBtn'
import Footer from './Footer'
import LoadingLayer from './LoadingLayer'

export default class Box extends React.Component {
  boxClass(){
    let result = ['box', 'box-border-change-effect'];
    result.push(`box-${this.props.type}`);
    if(this.props.collapse == "yes") result.push('collapsed-box');
    return result.join(' ');
  }
  render() {
    const boxClass = this.boxClass();
    return (
      <div className={boxClass} id={this.props.id}>
	<div className="box-header">
	  <h3 className="box-title">{this.props.title}</h3>
	  <div className="box-tools pull-right">
	    <CollapseBtn mode={this.props.collapse} />
	    <CloseBtn mode={true} />
	  </div>
	</div>
	<div className="box-body">
	  {this.props.body}
	</div>
	<Footer body={this.props.footer} />
	<LoadingLayer run={this.props.loading}/>
      </div>
    );
  }
}


Box.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string.isRequired,
  collapse: PropTypes.string,
  loading: PropTypes.bool,
  footer: PropTypes.node,
  body: PropTypes.node,
};

