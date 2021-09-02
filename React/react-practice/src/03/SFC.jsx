import React from 'react';
import PropTypes from 'prop-types';

function SFC(props, context) {
  const { somePropValue } = props;
  const { someContextValue } = context;
  return <h1>Hello, {somePropValue}</h1>;
}

SFC.propType = { somePropValue: PropTypes.any };
SFC.defaultProps = { somePropValue: 'default value' };

export default SFC;
