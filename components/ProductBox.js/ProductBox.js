import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';

import Button from '../Button/Button';

import {
  BoxImg,
  ProductImg,
  ProductTitle,
  PriceRow,
  ProductPrice,
} from "./ProductBox.styled";


export default function ProductBox({ product }) {
  const { _id, title, description, price, images } = product;
  const {addProduct} = useContext(CartContext);
  const url = "/product/" + _id;

  return (
    <div>
      <BoxImg href={url}>
        <ProductImg src={images[0]} alt={title} />
      </BoxImg>

      <div>
        <ProductTitle href={url}>{title}</ProductTitle>

        <PriceRow>
          <ProductPrice>{price} UAH</ProductPrice>

          <Button default onClick={() => addProduct(_id)}>Add to cart</Button>
        </PriceRow>
      </div>
    </div>
  );
}
