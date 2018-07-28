import styled from 'styled-components';
import { color } from 'theme';

const FooterStyled = styled.footer`
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
`;

const FooterCopyrightStyled = styled.div`
  flex: 1 0 auto;
  padding: 10px 20px;
  width: 100%;
  font-size: 12px;
  text-align: center;
  color: ${color.primary.l600};
`;

const FooterIconsStyled = styled.div`
  flex: 1 0 auto;
  padding: 10px 20px 20px;
  width: 100%;
`;

export { FooterStyled, FooterCopyrightStyled, FooterIconsStyled };
