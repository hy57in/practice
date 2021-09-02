import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BooleanComponent extends Component {
  render() {
    const message = this.props.bored ? '놀자' : '열공';
    return <div>{message}</div>;
  }
}

BooleanComponent.propTypes = {
  bored: PropTypes.bool,
};

export default BooleanComponent;
