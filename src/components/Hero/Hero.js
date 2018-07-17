import React from 'react';
import { HeroStyled } from './Hero.styles';

const Hero = ({ children }) => {
  return <HeroStyled>{children}</HeroStyled>;
};

export { Hero };
