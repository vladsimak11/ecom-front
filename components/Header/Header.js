import Link from "next/link";
import Image from 'next/image';
import { StyledHeader, Wrapper, StyledNav, NavLink, NavButton } from './Header.styled';
import Container from "../Container/Container";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";

import LogoImg250 from '../../images/ecomm-logo-250.png';

export default function Header() {
  const {cartProducts} = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);

  return (
    <StyledHeader>
      <Container>
        <Wrapper>
          <Link href={'/'}>
            <Image
              src={LogoImg250}
              width={250}
              alt="Logo Uksvel" 
            />
          </Link>

          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={'/'}>Home</NavLink>
            <NavLink href={'/products'}>Products</NavLink>
            <NavLink href={'/about'}>About us</NavLink>
            {/* <NavLink href={'/account'}>Account</NavLink> */}
            <NavLink href={'/cart'}>Cart ({cartProducts.length})</NavLink>
          </StyledNav>
          
          <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          </NavButton>
        </Wrapper>
      </Container>
    </StyledHeader>
  )
}
