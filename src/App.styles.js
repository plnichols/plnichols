import styled from 'styled-components';
import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { rgba, darken } from 'polished';
import { color, font } from 'theme';

injectGlobal`
  ${styledNormalize}
  
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  
  *, 
  *:before, 
  *:after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-size: 1.6em;
    line-height: 1.6;
    font-weight: 300;
    font-family: ${font.base};
    color: ${color.text};
    background: ${darken(0.05, color.primary.base)};
    background: 
    repeat-x linear-gradient(to bottom, ${darken(0.03, color.primary.dark)}, ${rgba(color.primary.dark, 0)}) 0 0,
    repeat-x linear-gradient(to bottom, ${rgba(color.primary.l800, 0)}, ${color.primary.l800} ) 100% 100%,
    linear-gradient(to bottom, ${darken(0.05, color.primary.base)}, ${darken(0.05, color.primary.base)} );
    background-size: 100% 800px, 100% 400px, 100% 100%; 
  }
`;

const AppStyled = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 912px;
  min-height: 100vh;
`;

export { AppStyled };
