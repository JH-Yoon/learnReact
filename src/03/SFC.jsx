import React from 'react';
import Proptypes from 'prop-types';

function SFC(props, context) {
  // 클래스형 컴포넌트의 this.props값과 동일
  const { somePropValue } = props;
  // 클래스형 컴포넌트의 this.context 와 동일
  const { someContextValue } = context;
  return <h1>Hello, {somePropValue}</h1>;
}

SFC.propTypes = { somePropValue: Proptypes.any };
SFC.defaultProps = { somePropValue: 'default value' };

export default SFC;
