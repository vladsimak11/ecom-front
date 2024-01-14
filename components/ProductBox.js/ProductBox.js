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

          <Button>Add to cart</Button>
        </PriceRow>
      </div>
    </div>
  );
}
