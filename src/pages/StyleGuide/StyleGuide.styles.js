import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';
import styled from 'styled-components';

injectGlobal`
  ${styledNormalize}
  
  body {
    font-family: 'Roboto', helvetica, arial, sans-serif;
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

const Wrapper = styled.section`
  padding: 4em;
`;

export { Title, Wrapper };
