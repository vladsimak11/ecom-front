import Header from "@/components/Header/Header";
import { CartWrapper, CartBox, StyledTable, CartImg, CartTitle, QuantityCart,  CityHolder } from "./cart.styled";
import Container from "../components/Container/Container";
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext/CartContext";
import axios from "axios";

export default function CartPage() {
  const {cartProducts, addProduct, removeProduct} = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [streetAddress,setStreetAddress] = useState('');
  const [country,setCountry] = useState('');

  useEffect(() => {
    if(cartProducts.length > 0) {
      axios.post('/api/cart', {ids: cartProducts})
      .then(response => {
        setProducts(response.data);
      })
    } else {
      setProducts([]);
    }

  }, [cartProducts]);

  let count;

  function moreOfThisProduct(id) {
    addProduct(id);
  }

  function lessOfThisProduct(id) {
    removeProduct(id);
  }

  let total = 0;

  for (const productId of cartProducts) {
    const price = products.find(p => p._id === productId)?.price || 0;
    total += price;
  }
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
                        <td>
                          <Button onClick={() => lessOfThisProduct(_id)}>-</Button>
                            <QuantityCart>
                              {count = cartProducts.filter(id => id === _id).length}
                            </QuantityCart>
                          <Button onClick={() => moreOfThisProduct(_id)}>+</Button>
                        </td>
                        <td>{price*count} UAH</td>
                      </tr>                    
                    ))}
                    <tr>
                      <td>Total:</td>
                      <td></td>
                      <td>{total} UAH</td>
                    </tr>
                </tbody>
              </StyledTable>
            )}
          </CartBox>
            {!!cartProducts.length && (
              <CartBox>
                <h2>Order Information</h2>
                <Input 
                  type="text"
                  placeholder="Name"
                  value={name}
                  name="name"
                  onChange={ev => setName(ev.target.value)} />
                
                <Input 
                  type="text"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={ev => setEmail(ev.target.value)}/>
                
                <CityHolder>
                  <Input 
                    type="text"
                    placeholder="City"
                    value={city}
                    name="city"
                    onChange={ev => setCity(ev.target.value)}/>
                  
                  <Input 
                    type="text"
                    placeholder="Postal Code"
                    value={postalCode}
                    name="postalCode"
                    onChange={ev => setPostalCode(ev.target.value)}/>
                </CityHolder>

                <Input 
                  type="text"
                  placeholder="Street Address"
                  value={streetAddress}
                  name="streetAddress"
                  onChange={ev => setStreetAddress(ev.target.value)}/>
                
                <Input 
                  type="text"
                  placeholder="Country"
                  value={country}
                  name="country"
                  onChange={ev => setCountry(ev.target.value)}/>

                <Button primary block>Continue to payment</Button>
              </CartBox>
            )}
        </CartWrapper>
      </Container>
    </>
  )
}