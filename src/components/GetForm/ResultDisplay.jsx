import React from 'react';
import PropTypes from 'prop-types';

export default class ResultDisplay extends React.Component {
  render() {
    return (
      <div>
	Request: {this.props.url}<br />
	Result: 
	<pre>{JSON.stringify(this.props.data,null,2)}</pre>
      </div>
    );
  }
}


ResultDisplay.propTypes = {
  url: PropTypes.string,
  data: PropTypes.object,
};


