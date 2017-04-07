import React from 'react';
import FormInput from './FormInput';
import FormDisplay from './FormDisplay';

export default class FormApp extends React.Component {
  render() {
    return (
      <div>
	<FormInput handleClick={this.props.onClick} />
	<FormDisplay data={this.props.value} />
      </div>
    );
  }
}


FormApp.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  value: React.PropTypes.string,
};

