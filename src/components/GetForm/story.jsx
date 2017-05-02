import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import FormApp from './FormApp';

export default storiesOf('Get Form', module)
  .addDecorator((story) => (
    <div className="content-wrapper">
      <section className="content">
	{ story() }
      </section>
    </div>
  ))
  .add('default', () => (
    <FormApp getTestJSON={action('clicked')} />
  ))
  .add('with data', () => (
    <FormApp getTestJSON={action('clicked')} value={{test: "message", val: 123}} url="http://test.url"/>
  ));

