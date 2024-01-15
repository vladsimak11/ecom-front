import Header from "@/components/Header/Header";
import { CartWrapper, CartBox, StyledTable, CartImg, CartTitle } from "./cart.styled";
import Container from "../components/Container/Container";
import Button from '../components/Button/Button';
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext/CartContext";
import axios from "axios";

export default function CartPage() {
  const {cartProducts} = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if(cartProducts.length > 0) {
      axios.post('/api/cart', {ids: cartProducts})
      .then(response => {
        setProducts(response.data);
      })
    }

  }, [cartProducts]);

  let count;

  return (
    <>
      <Header/>
      <Container>
        <CartWrapper>
          <CartBox>
            <h2>Cart</h2>
            {!cartProducts.length && (
              <div>Your cart is empty</div>
            )}

            {products.length > 0 && (
              <StyledTable>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>

                <tbody>
                    {products.map(({_id, title, price, images}) => (
                      <tr>
                        <td>
                          <CartTitle>{title}</CartTitle>
                          <CartImg src={images[0]} alt={title} />
                        </td>
                        <td>{count = cartProducts.filter(id => id === _id).length}</td>
                        <td>{price*count}</td>
                      </tr>                    
                    ))}
                </tbody>
              </StyledTable>
            )}
          </CartBox>
            {!!cartProducts.length && (
              <CartBox>
                <h2>Order Information</h2>
                <Button primary block>Continue to payment</Button>
              </CartBox>
            )}
        </CartWrapper>
      </Container>
    </>
  )
}