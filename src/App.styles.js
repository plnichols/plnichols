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
    font-size: 1.6em;
    line-height: 1.6;
    font-weight: 400;
    font-family: ${font.base};
    color: ${color.text};
    background-color: ${color.bg};
  }
`;

const AppStyled = styled.div`
  padding: 20px;
`;

export { AppStyled };
