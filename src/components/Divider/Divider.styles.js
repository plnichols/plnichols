import styled from 'styled-components';

const marginObj = {
  tiny: '10px',
  small: '20px',
  medium: '40px',
  large: '80px',
  none: '0'
};

const DividerStyled = styled.hr`
  margin: ${props => (props.size ? marginObj[props.size] : '30px')} 0;
  height: 0;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export { DividerStyled };
