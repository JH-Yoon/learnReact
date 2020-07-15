import React, { Component } from 'react';

class StateExample extends Component {
  constructor(props) {
    super(props);
    // define state
    this.state = {
      loading: true,
      formData: 'no data',
    };
    this.handleData = this.handleData.bind(this);
    // call handleData functiond after 4 seconds
    setTimeout(this.handleData, 4000);
  }
  handleData() {
    const data = 'new data';
    const { formData } = this.state;
    // change the 'state'
    this.setState({
      loading: false,
      formData: data + formData,
    });
    // this.state loading is 'true' now.
    console.log('loading value', this.state.loading);
  }
  render() {
    return (
      <div>
        <span>Loading... : {String(this.state.loading)}</span>
        <span>Result : {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;
