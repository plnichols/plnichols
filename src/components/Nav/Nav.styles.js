import styled from 'styled-components';
import { color } from 'theme';

const NavStyled = styled.ul`
  margin: 0;
  padding: 12px 0;
  list-style: none;
  text-align: center;
`;

const NavItemStyled = styled.li`
  margin: 0;
  padding: 0 10px;
  display: inline-block;
  text-align: center;
  font-size: 14px;
  font-weight: 100;
  line-height: 1.3;
  text-transform: uppercase;
  border-right: 1px solid ${color.primary.base};

  &:last-child {
    border-right: 0;
  }

  a {
    padding: 10px;
    color: ${color.primary.l300};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export { NavStyled, NavItemStyled };
