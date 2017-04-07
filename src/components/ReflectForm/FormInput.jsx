import React from 'react';

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
	<input type="text" ref={(ref) => (this.myInput = ref)} defaultValue="" />
	<button onClick={(event) => this.send(event)}>Send</button>
      </form>
    );
  }
}


FormInput.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
};

