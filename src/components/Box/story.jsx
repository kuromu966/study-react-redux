import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Box from './Box';

export default storiesOf('Box', module)
  .addDecorator((story) => (
    <div className="content-wrapper">
      <section className="content">
	{ story() }
      </section>
    </div>
  ))
  .add('default', () => (
    <Box type="default" id="test_box" collapse="no" title="Title" body={<div> body text </div>} footer={<div> footer text</div>}/>
  ))
  .add('collapsed box', () => (
    <Box type="default" id="test_box" title="Title" collapse="yes" body={<div> body text </div>}/>
  ))
  .add('laoding box', () => (
    <Box type="default" id="test_box" title="Title" loading={true} body={<div> body text </div>}/>
  ))
  .add('primary box', () => (
    <Box type="primary" id="test_box" title="Title" body={<div> body text </div>}/>
  ));
