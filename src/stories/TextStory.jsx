import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from '../04/Text';

storiesOf('Text', module)
  .addWithJSX('default setting', () => <Text>Hello</Text>)
  .addWithJSX('large eg', () => <Text large> Hello</Text>)
  .addWithJSX('xlarge eg', () => <Text xlarge>Hello</Text>)
  .addWithJSX('small eg', () => <Text small>Hello</Text>)
  .addWithJSX('xsmall eg', () => <Text xsmall>Hello</Text>)
  .addWithJSX('primary eg', () => <Text primary>Hello</Text>)
  .addWithJSX('secondary eg', () => <Text secondary>Hello</Text>)
  .addWithJSX('primary and large eg', () => (
    <Text primary large>
      Hello
    </Text>
  ));
