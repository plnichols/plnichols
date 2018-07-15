import styled, { css } from 'styled-components';
import { color } from 'theme';

const ButtonStyled = styled.button`
  display: inline-block;
  padding: 8px 30px;
  color: white;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  line-height: 2;
  text-transform: uppercase;
  text-decoration: none;
  background-color: ${color.primary};
  border-radius: 4px;
  border: 1px solid ${color.primary};
  cursor: pointer;

  &:hover {
    background-color: ${color.primaryDark};
    border-color: ${color.primaryDark};
  }

  ${props =>
    props.secondary &&
    css`
      background-color: ${color.secondary};
      border-color: ${color.secondary};

      &:hover {
        background-color: ${color.secondaryDark};
        border-color: ${color.secondaryDark};
      }
    `};

  ${props =>
    props.outline &&
    css`
      background-color: transparent;
      color: ${props.secondary ? color.secondary : color.primary};
      border-color: ${props.secondary ? color.secondary : color.primary};

      &:hover {
        background-color: transparent;
        color: ${props.secondary ? color.secondaryDark : color.primaryDark};
        border-color: ${props.secondary
          ? color.secondaryDark
          : color.primaryDark};
      }
    `};

  ${props =>
    props.disabled &&
    css`
      color: white;
      background-color: ${color.lightGrey};
      border-color: ${color.lightGrey};
      cursor: not-allowed;

      &:hover {
        color: white;
        background-color: ${color.lightGrey};
        border-color: ${color.lightGrey};
      }
    `};

  ${props =>
    props.rounded &&
    css`
      border-radius: 200px;
    `};

  ${props =>
    props.small &&
    css`
      font-size: 11px;
      padding: 3px 15px 2px;
    `};

  ${props =>
    props.large &&
    css`
      font-size: 18px;
      padding: 12px 40px;
    `};
`;

const AnchorStyled = ButtonStyled.withComponent('a');

export { ButtonStyled, AnchorStyled };
