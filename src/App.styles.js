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
    font-weight: 300;
    font-family: ${font.base};
    color: ${color.text};
    background: ${color.primary.base};
    background: 
    repeat-x linear-gradient(to bottom, ${color.primary.dark}, ${color.primary.base} ) 0 0, 
    repeat-x linear-gradient(to bottom, ${color.primary.base}, ${color.primary.l800} ) 100% 100%,
    linear-gradient(to bottom, ${color.primary.base}, ${color.primary.base} );
    background-size: 100% 800px, 100% 400px, 100% 100%; 
  }
`;

const AppStyled = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 900px;
  min-height: 100vh;
`;

export { AppStyled };
