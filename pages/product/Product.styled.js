import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
`;

export const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  gap: 40px;
  margin: 40px 0px;
`;

export const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 30px;
`;
export const Price = styled.span`
  font-size: 1.4rem;
`;