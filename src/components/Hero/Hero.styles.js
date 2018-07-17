import styled from 'styled-components';
import { media } from 'theme';

const HeroStyled = styled.div`
  h1 {
    font-size: 22vw;

    ${media.up.md`
      font-size: 22rem;
    `};
  }

  h2 {
    font-size: 9vw;

    ${media.up.md`
      font-size: 9rem;
    `};
  }

  h3 {
    font-size: 5vw;

    ${media.up.md`
      font-size: 5rem;
    `};
  }

  h4 {
    font-size: 3.5vw;

    ${media.up.md`
      font-size: 3.5rem;
    `};
  }
`;

export { HeroStyled };
