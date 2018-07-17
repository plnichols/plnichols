import React from 'react';
import { withSpacing } from 'hoc';
import { DividerStyled } from './Divider.styles';

const DividerComponent = ({ size }) => {
  return <DividerStyled size={size} />;
};

const Divider = withSpacing(DividerComponent);

export { Divider };
