import styled from 'styled-components';
import { color, media } from 'theme';

const FooterCopyrightStyled = styled.div`
  flex: 1 0 auto;
  width: 100%;
  font-size: 12px;
  text-align: center;
  color: ${color.primary.l500};

  ${media.up.xs`
    text-align: left;
  `};
`;

export { FooterCopyrightStyled };
