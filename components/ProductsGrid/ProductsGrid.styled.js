import styled from 'styled-components';

export const StyledProductsGrid = styled.div`
  display: grid;
  grid-gap: 25px;
  padding-top: 30px;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;