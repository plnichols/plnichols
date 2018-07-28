import styled from 'styled-components';
import { Icon } from 'components';
import { color } from 'theme';

const SocialStyled = styled.ul`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const SocialItemStyled = styled.li`
  flex: 0;
  margin: 0;
  padding: 0;
`;

const SocialLinkStyled = styled.a`
  display: block;
  padding: 10px;
`;

const SocialIconStyled = styled(Icon)`
  display: block;
  width: 30px;
  height: 30px;
  font-size: 30px;
  fill: ${color.primary.l500};
`;

export { SocialStyled, SocialItemStyled, SocialLinkStyled, SocialIconStyled };
