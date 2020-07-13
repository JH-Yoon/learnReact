import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends Component {
  render() {
    const { boolValue, numVlue, arrayValue, objValue, nodeValue, funcValue } = this.props;

    return (
      <div>
        <span>Boolean Value : {boolValue}</span>
        <span>Number Value : {numVlue}</span>
        <span>Array Value : {arrayValue}</span>
        <span>Object Value : {String(objValue)}</span>
        <span>Node Value : {nodeValue}</span>
        <span>Function Value : {String(funcValue)}</span>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  boolValue: PropTypes.bool,
  numVlue: PropTypes.number,
  arrayValue: PropTypes.array,
  objValue: PropTypes.object,
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
};

export default ChildComponent;
