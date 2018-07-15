import React from 'react';
import { ButtonStyled, AnchorStyled } from './Button.styles';

const Button = ({
  primary,
  secondary,
  rounded,
  disabled,
  outline,
  small,
  large,
  anchor,
  children,
  ...rest
}) => {
  const Component = anchor ? AnchorStyled : ButtonStyled;

  return (
    <Component
      {...primary && { primary }}
      {...secondary && { secondary }}
      {...rounded && { rounded }}
      {...disabled && { disabled }}
      {...outline && { outline }}
      {...small && { small }}
      {...large && { large }}
      {...rest}
    >
      {children}
    </Component>
  );
};

export { Button };
