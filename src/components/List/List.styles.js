import styled from 'styled-components';

const ListStyled = styled.ul`
  list-style: circle inside;
  margin: 0 0 20px;
  padding: 0;

  & & {
    margin: 5px 0 5px 20px;
    font-size: 90%;
  }
`;

const OrderedListStyled = ListStyled.extend`
  list-style: decimal inside;
`;

export { ListStyled, OrderedListStyled };