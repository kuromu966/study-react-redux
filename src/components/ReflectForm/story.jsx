import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import FormApp from './FormApp';

export default storiesOf('Reflect Form', module)
  .addDecorator((story) => (
    <div className="content-wrapper">
      <section className="content">
	{ story() }
      </section>
    </div>
  ))
  .add('default', () => (
    <FormApp />
  ))
  .add('with text', () => (
    <FormApp value="default value setted"/>
  ));
