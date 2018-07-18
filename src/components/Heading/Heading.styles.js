import styled from 'styled-components';

const BaseHeading = styled.span`
  margin: 0 0 2rem;
  line-height: 1.25;
  font-weight: 300;
  letter-spacing: -1px;
`;

const H1Styled = BaseHeading.withComponent('h1').extend`
  font-size: ${props => props.size || '5rem'};
`;

const H2Styled = BaseHeading.withComponent('h2').extend`
  font-size: ${props => props.size || '4rem'};
  margin-bottom: 1rem;
`;

const H3Styled = BaseHeading.withComponent('h3').extend`
  font-size: ${props => props.size || '3rem'};
  margin-bottom: 0.5rem;
`;

const H4Styled = BaseHeading.withComponent('h4').extend`
  font-size: ${props => props.size || '2.4rem'};
`;

const H5Styled = BaseHeading.withComponent('h5').extend`
  font-size: ${props => props.size || '1.8rem'};
`;

const H6Styled = BaseHeading.withComponent('h6').extend`
  font-size: ${props => props.size || '1.5rem'};
`;

export { H1Styled, H2Styled, H3Styled, H4Styled, H5Styled, H6Styled };
