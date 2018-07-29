import React from 'react';
import { Box, Social, Row, Col } from 'components';
import { FooterCopyrightStyled } from './Footer.styles';

const Footer = () => {
  return (
    <Box mt={80} mb={20}>
      <Row>
        <Col>
          <FooterCopyrightStyled>&copy; 2018 Pierre Luc Nichols</FooterCopyrightStyled>
        </Col>
        <Col>
          <Social />
        </Col>
      </Row>
    </Box>
  );
};

export { Footer };
