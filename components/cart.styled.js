import styled from 'styled-components';

export const CartWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.3fr .7fr;
  gap: 40px;
  margin-top: 20px;
`;

export const CartBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th {
    text-align: left;
    color: var(--default-color);
    text-transform: uppercase;
  }

  tbody tr {
    border-bottom: 2px solid var(--default-color);
  }
`;

export const CartImg = styled.img`
  max-width: 300px;
  border: 2px solid var(--main-color);
  margin-bottom: 20px;
`;

export const CartTitle = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const QuantityCart = styled.span`
  padding: 0 5px;
`;

export const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;