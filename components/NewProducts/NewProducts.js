import Container from "../Container/Container";
import ProductBox from "../ProductBox.js/ProductBox";
import { ProductsGrid, Header } from "./NewProducts.styled";

export default function NewProducts({products}) {
  return (
    <div>
      <Container>
        <Header>New Products</Header>
        <ProductsGrid>
          {products.map(product =>(
            <ProductBox product={product} />
          ))}
        </ProductsGrid>
      </Container>
    </div>
  )
}