import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropsComponent extends Component {
  render() {
    return <div className="message-container">{this.props.name}</div>;
  }
}

//자료형을 선언하는 예제
//특수변수 : propTypes. PropTypes와 다름
PropsComponent.propTypes = {
  name: PropTypes.string,
};

export default PropsComponent;