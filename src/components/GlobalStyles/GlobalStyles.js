import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { rgba, darken } from 'polished';
import { color, font, media } from 'theme';

export const GlobalStyles = createGlobalStyle`
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
  
  strong {
    font-weight: 700;
  }
  
  a {
    color: white;
    text-decoration: underline;
    
    &:hover {
      color: ${color.primary.l200};
    }
  }
  
  table {
    width: 100%;
    margin: 0;
    border-spacing: 0;
    border-collapse: collapse;
  }
  
  th {
    font-weight: 500;
    color: white;
    text-align: left;
    border-bottom: 1px solid ${rgba(color.primary.l100, 0.5)};
  }
  
  td {
    color: ${rgba('white', 0.75)};
    border-top: 1px solid ${rgba(color.primary.l100, 0.25)};
  }
  
  td, th {
    padding: 10px 5px;
    text-align: left;
    vertical-align: top;
  }
  
  ${media.down.xs`
    tr, td, th {
      display: block;
    }
  
    tr {
      padding: 10px 0;
      border-top: 1px solid ${rgba(color.primary.l100, 0.5)};
    }
    tr:first-child {
      border-top: 0;
    }
  
    thead {
      display: none;
    }
  
    td {
      clear: both;
      border: none;
    }
  
    td, th {
      padding: 5px 0;
    }
  `};
`;
