import React from 'react';
import { ButtonStyled, AnchorStyled } from './Button.styles';

const Button = ({
  primary,
  secondary,
  white,
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
      {...white && { white }}
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
