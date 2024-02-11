import Header from "@/components/Header/Header";
import Container from "../components/Container/Container";
import Footer from "@/components/Footer/Footer";
import { ProductsTitle } from "../components/products.styled";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import ProductsGrid from "@/components/ProductsGrid/ProductsGrid";


export default function ProductsPage({products}) {

  return (
    <>
      <Header/>
        <Container>
          <ProductsTitle>Products</ProductsTitle>
          <ProductsGrid products={products}/>
        </Container>
      <Footer/>  
    </>
  )
  
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, {sort:{'_id':-1}});
  return {
    props:{
      products: JSON.parse(JSON.stringify(products)),
    }
  };
}