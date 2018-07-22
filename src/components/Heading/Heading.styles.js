import styled from 'styled-components';
import { color } from 'theme';

const BaseHeading = styled.span`
  margin: 0 0 2rem;
  line-height: 1.25;
  font-weight: 300;
  letter-spacing: -1px;
  color: ${color.text};
`;

const H1Styled = BaseHeading.withComponent('h1').extend`
  font-size: ${props => props.size || '5rem'};
`;

const H2Styled = BaseHeading.withComponent('h2').extend`
  font-size: ${props => props.size || '4rem'};
  margin-bottom: 1rem;
`;

const H3Styled = BaseHeading.withComponent('h3').extend`
  font-size: ${props => props.size || '2.8rem'};
  font-weight: 100;
  margin-bottom: 0.5rem;
  color: ${color.primary.l50};
  letter-spacing: -0.5px;
`;

const H4Styled = BaseHeading.withComponent('h4').extend`
  font-size: ${props => props.size || '2.4rem'};
  font-weight: 100;
  color: ${color.primary.l50};
  letter-spacing: -0.3px;
`;

const H5Styled = BaseHeading.withComponent('h5').extend`
  font-size: ${props => props.size || '1.8rem'};
  font-weight: 100;
  color: ${color.primary.l50};
  letter-spacing: -0.3px;
`;

const H6Styled = BaseHeading.withComponent('h6').extend`
  font-size: ${props => props.size || '1.5rem'};
  font-weight: 100;
  color: ${color.primary.l50};
  letter-spacing: -0.3px;
`;

export { H1Styled, H2Styled, H3Styled, H4Styled, H5Styled, H6Styled };
