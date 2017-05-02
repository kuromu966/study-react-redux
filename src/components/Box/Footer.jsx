import React from 'react';
import PropTypes from 'prop-types';

export default class Footer extends React.Component {
  render() {
    if(!this.props.body) return null;
    return (
      <div className="box-footer">
	{this.props.body}
      </div>
    );
  }
}

Footer.propTypes = {
  body: PropTypes.node,
};

