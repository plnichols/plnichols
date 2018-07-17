import React from 'react';
import { BoxStyled } from './Box.styles';

const Box = ({
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
  children
}) => {
  return (
    <BoxStyled
      m={m}
      mx={mx}
      my={my}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      p={p}
      px={px}
      py={py}
      pt={pt}
      pr={pr}
      pb={pb}
      pl={pl}
    >
      {children}
    </BoxStyled>
  );
};

export { Box };
