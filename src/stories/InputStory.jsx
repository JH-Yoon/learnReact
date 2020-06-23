import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from '../03/Input';
import { bindActionCreators } from 'redux';

storiesOf('Input', module)
  .addWithJSX('기본 설정', () => <Input name="name" />)
  .addWithJSX('label 예제', () => <Input name="name" label="이름" />)
  .addWithJSX('onChange 예제', () => <Input name="name" onChange={action('onChange Event')} />);
