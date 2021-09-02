import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropsComponent extends Component {
  render() {
    const { name, boolValue, numValue } = this.props;
    return (
      <div>
        <span>{name}이다</span>
        <br />
        <span>{boolValue}이다</span>
        <br />
        <span>{numValue}이다</span>
      </div>
    );
  }
}

PropsComponent.propTypes = {
  name: PropTypes.string,
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
};

export default PropsComponent;
