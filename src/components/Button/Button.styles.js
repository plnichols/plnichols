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
  background-color: ${color.primary.base};
  border-radius: 4px;
  border: 1px solid ${color.primary.base};
  cursor: pointer;

  &:hover {
    background-color: ${color.primary.dark};
    border-color: ${color.primary.dark};
  }

  ${props =>
    props.secondary &&
    css`
      background-color: ${color.secondary.base};
      border-color: ${color.secondary.base};

      &:hover {
        background-color: ${color.secondary.dark};
        border-color: ${color.secondary.dark};
      }
    `};

  ${props =>
    props.white &&
    css`
      color: ${props.secondary ? color.secondary.base : color.primary.base};
      background-color: white;
      border-color: white;

      &:hover {
        color: ${props.secondary ? color.secondary.dark : color.primary.dark};
        background-color: white;
        border-color: white;
      }
    `};

  ${props =>
    props.outline &&
    css`
      background-color: transparent;
      color: ${props.white ? 'white' : props.secondary ? color.secondary.base : color.primary.base};
      border-color: ${props.white ? 'white' : props.secondary ? color.secondary.base : color.primary.base};

      &:hover {
        background-color: transparent;
        color: ${props.white ? 'white' : props.secondary ? color.secondary.dark : color.primary.dark};
        border-color: ${props.white ? 'white' : props.secondary ? color.secondary.dark : color.primary.dark};
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
