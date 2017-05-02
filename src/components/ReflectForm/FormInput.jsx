import React from 'react';
import PropTypes from 'prop-types';

export default class FormInput extends React.Component {
  send(e) {
    e.preventDefault();
    this.props.handleClick(this.myInput.value.trim());
    this.myInput.value = '';
    return;
  }
  render() {
    return (
      <form>
	<input type="text" ref={(ref) => (this.myInput = ref)} defaultValue={this.props.data} />
	<button onClick={(event) => this.send(event)}>Send</button>
      </form>
    );
  }
}


FormInput.propTypes = {
  handleClick: PropTypes.func.isRequired,
  data: PropTypes.string,
};

