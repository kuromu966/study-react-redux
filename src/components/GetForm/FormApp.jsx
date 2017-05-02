import React from 'react';
import PropTypes from 'prop-types';
import ResultDisplay from './ResultDisplay';

export default class FormApp extends React.Component {
  get(e,url) {
    e.preventDefault();
    this.props.getTestJSON(url);
    return;
  }
  clear(e) {
    e.preventDefault();
    this.props.clearTestJSON();
    return;
  }
  render() {
    let result = null;
    if(this.props.url){
      result = <ResultDisplay url={this.props.url} data={this.props.value} />;
    }
    return (
      <div>
	Get Form<br />
	<form>
	  <button onClick={(event) => this.get(event,"http://localhost:3000/api/test")}>Get(Success)</button>
	  <button onClick={(event) => this.get(event,"http://localhost:3000/api/test_error")}>Get(Failuer)</button>
	  <button onClick={(event) => this.clear(event)}>Clear</button>
	</form>
	{result}
      </div>
    );
  }
}


FormApp.propTypes = {
  getTestJSON: PropTypes.func.isRequired,
  value: PropTypes.object,
  url: PropTypes.string,
};

