import styled from 'styled-components';
import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { color, font } from 'theme';

injectGlobal`
  ${styledNormalize}
  
  html {
    font-size: 62.5%;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-size: 1.6em;
    line-height: 1.6;
    font-weight: 400;
    font-family: ${font.base};
    color: ${color.text};
    background-color: ${color.bg};
  }
`;

const AppStyled = styled.div`
  position: relative;
  min-height: 100vh;
  background: ${color.primary.base};
  background: linear-gradient(
    0deg,
    ${color.primary.l800} 0%,
    ${color.primary.base} 10%,
    ${color.primary.base} 70%,
    ${color.primary.dark} 100%
  );
`;

export { AppStyled };
