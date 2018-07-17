import styled, { css } from 'styled-components';

const getSpacing = (p, type) => {
  const spacing = [
    (p[type + 't'] || p[type + 'y'] || p[type] || 0) + 'px',
    (p[type + 'r'] || p[type + 'x'] || p[type] || 0) + 'px',
    (p[type + 'b'] || p[type + 'y'] || p[type] || 0) + 'px',
    (p[type + 'l'] || p[type + 'x'] || p[type] || 0) + 'px'
  ];

  return spacing.join(' ');
};

const hasMargin = p => {
  return p.m || p.mx || p.my || p.mt || p.mr || p.mb || p.ml;
};

const hasPadding = p => {
  return p.p || p.px || p.py || p.pt || p.pr || p.pb || p.pl;
};

const BoxStyled = styled.div`
  ${props =>
    hasMargin(props) &&
    css`
      margin: ${props => getSpacing(props, 'm')};
    `};

  ${props =>
    hasPadding(props) &&
    css`
      padding: ${props => getSpacing(props, 'p')};
    `};
`;

export { BoxStyled };
