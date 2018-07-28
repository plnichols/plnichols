import React from 'react';
import { Social } from 'components';
import { FooterStyled, FooterCopyrightStyled, FooterIconsStyled } from './Footer.styles';

const Footer = () => {
  return (
    <FooterStyled>
      <FooterCopyrightStyled>Copyright &copy; 2018</FooterCopyrightStyled>
      <FooterIconsStyled>
        <Social />
      </FooterIconsStyled>
    </FooterStyled>
  );
};

export { Footer };
