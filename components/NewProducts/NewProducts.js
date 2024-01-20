import Container from "../Container/Container";
import ProductsGrid from "../ProductsGrid/ProductsGrid";
import { Header } from "./NewProducts.styled";

export default function NewProducts({products}) {
  return (
    <div>
      <Container>
        <Header>New Products</Header>
        <ProductsGrid products={products}/>
      </Container>
    </div>
  )
}