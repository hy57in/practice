import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RequiredComponet extends Component {
  render() {
    const { age } = this.props;
    return <div>{age}</div>;
  }
}

RequiredComponet.propTypes = {
  age: PropTypes.number.isRequired,
};

export default RequiredComponet;
