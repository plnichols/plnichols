import styled from 'styled-components';
import { Icon } from 'components';
import { color, media } from 'theme';

const SocialStyled = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style-type: none;

  ${media.up.xs`
    justify-content: flex-end;
  `};
`;

const SocialItemStyled = styled.li`
  flex: 0;
  margin: 0;
  padding: 0;
`;

const SocialLinkStyled = styled.a`
  display: block;
  padding: 10px;
  fill: ${color.primary.l500};

  &:hover {
    fill: ${color.primary.l200};
  }
`;

const SocialIconStyled = styled(Icon)`
  display: block;
  width: 30px;
  height: 30px;
  font-size: 30px;
  fill: inherit;
`;

export { SocialStyled, SocialItemStyled, SocialLinkStyled, SocialIconStyled };
