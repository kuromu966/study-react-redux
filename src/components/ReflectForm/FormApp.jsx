import React from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import FormDisplay from './FormDisplay';

export default class FormApp extends React.Component {
  render() {
    return (
      <div>
	Reflect Form<br />
	<FormInput handleClick={this.props.onClick} data={this.props.value}/>
	<FormDisplay data={this.props.value} />
      </div>
    );
  }
}


FormApp.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
};

