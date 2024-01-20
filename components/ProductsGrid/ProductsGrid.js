import ProductBox from "../ProductBox.js/ProductBox";
import { StyledProductsGrid } from "./ProductsGrid.styled";

export default function ProductsGrid({products}) {
  return (
    <StyledProductsGrid>
      {products.map(product =>(
        <ProductBox key={product._id} product={product} />
      ))}
    </StyledProductsGrid>
  )
}