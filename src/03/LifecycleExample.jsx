import React, { Component } from 'react';

class LifecycleExample extends Component {
  static getDerivedStateFromProps() {
    console.log('Call - getDerivedStateFromProps');
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {};
    console.log('Call - constructor');
  }
  componentDidMount() {
    console.log('Call - componentDidMount');
    this.setState({ updated: true });
  }
  componentDidUpdate() {
    console.log('Call - componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('Call - componentWillUnmount');
  }
  getSnapshotBeforeUpdate() {
    console.log('Call - getSnapshotBeforeUpdate');
    return {};
  }
  shouldComponentUpdate() {
    console.log('Call - shouldComponentUpdate');
    return true;
  }
  render() {
    console.log('Call - render');
    return null;
  }
}

export default LifecycleExample;
