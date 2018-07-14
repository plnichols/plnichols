import styled from 'styled-components';
import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { color, font } from './Theme.config.js';

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

export const Theme = styled.div``;
