import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComponent2 extends Component {
  render() {
    const { objValue } = this.props;

    return (
      <div>
        <div>Object Value : {String(Object.entries(objValue))}</div>
      </div>
    );
  }
}

ChildComponent2.propTypes = {
  //Object properties
  objValue: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  //required properties
  requiredStringValue: PropTypes.string.isRequired,
};

export default ChildComponent2;
