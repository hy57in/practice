import React, { Component } from 'react';

class TodaysPlan extends Component {
  render() {
    const name = this.props.name;
    return <div>My name is {name}</div>;
  }
}

export default TodaysPlan;
