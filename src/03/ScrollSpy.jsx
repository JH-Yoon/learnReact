import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ScrollSpy extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setState.bind(this);
    this.checkPosition = this.checkPosition.bind(this);
    window.addEventListener('scroll', this.checkPosition);
  }
  setRef(ref) {
    this.ref = ref;
  }

  checkPosition() {
    if (this.ref.getBoundingClientRect().top < window.innerHeight) {
      console.log('enter');
    } else {
      console.log('exit');
    }
  }

  componentDidMount() {
    this.checkPosition();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkPosition);
  }

  render() {
    return <div ref={this.setRef} />;
  }
}

ScrollSpy.propTypes = {};

export default ScrollSpy;
