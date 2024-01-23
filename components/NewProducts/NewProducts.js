import Container from "../Container/Container";
import ProductsGrid from "../ProductsGrid/ProductsGrid";
import { Title } from "../../components/NewProducts/NewProducts.styled";

export default function NewProducts({products}) {
  return (
    <div>
      <Container>
        <Title>New Products</Title>
        <ProductsGrid products={products}/>
      </Container>
    </div>
  )
}