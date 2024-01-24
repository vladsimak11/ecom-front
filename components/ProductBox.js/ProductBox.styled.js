import Link from 'next/link';
import styled from 'styled-components';

export const BoxImg = styled(Link)`
  display: block;
  color: var(--main-color);
`;

export const ProductImg = styled.img`
  width: 100%;
  border: 2px solid var(--main-color);
  box-shadow: 0px 0px 0px 0px rgba(0,31,63,0.41);

  ransition: var(--main-transition);
  &:hover {
    box-shadow: 2px 2px 5px 0px rgba(0,31,63,0.41);
  }
  box-sizing: border-box;
`;

export const ProductTitle = styled(Link)`
  display: block;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
  height: 50px;
  color: var(--main-color);

  font-weight: normal;
  font-size: 1.3rem;
  text-align: center;
  transition: var(--main-transition);

  &:hover {
    color: var(--second-color);
  }
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
`;

export const ProductPrice = styled.p`
  font-size: 22px;
  font-weight: 500;
`;