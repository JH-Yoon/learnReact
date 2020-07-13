import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DefaultPropsComponent extends Component {
  render() {
    let message1 = '';
    if (this.props.boolValue === false) {
      message1 = "boolValue's default value is [false].";
    }
    let message2 = '';
    if (this.props.boolValueWithoutDefault === false) {
      message2 = "boolValue's default value is [false].";
    }
    return (
      <div className="message-container">
        {message1}
        {message2}
      </div>
    );
  }
}

DefaultPropsComponent.propTypes = {
  boolValue: PropTypes.bool,
  boolValueWithoutDefault: PropTypes.bool,
};

//declare default value example
DefaultPropsComponent.defaultProps = {
  boolValue: false,
};

export default DefaultPropsComponent;
