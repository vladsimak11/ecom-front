import Header from "@/components/Header/Header";
import Container from "../../components/Container/Container";
import Footer from "@/components/Footer/Footer";
import { Title, ColWrapper, PriceRow, Price } from '../product/Product.styled';
import Button from '../../components/Button/Button';
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext/CartContext";
import ProductImages from "@/components/ProductImages/ProductImages";

export default function ProductPage({product}) {
  const {addProduct} = useContext(CartContext);

  return (
    <>
      <Header/>
      <Container>
        <ColWrapper>
          <div>
            <ProductImages images={product.images}/>
          </div>

          <div>
            <Title>{product.title}</Title>
            <p>{product.description}</p>

            <PriceRow>
              <div>
                <Price>{product.price} UAH</Price>
              </div>

              <div>
                <Button default onClick={() => addProduct(product._id)}>Add to cart</Button>
              </div>
            </PriceRow>
          </div>
        </ColWrapper>
      </Container>

      <Footer/>
    </>
  )
}


export async function getServerSideProps(context) {
  await mongooseConnect();
  const {id} = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    }
  }
}