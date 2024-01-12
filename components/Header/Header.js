import Link from "next/link";
import Image from 'next/image'
import { StyledHeader, Wrapper, StyledNav, NavLink } from './Header.styled';
import Container from "../Container/Container";

import LogoImg250 from '../../images/ecomm-logo-250.png';

export default function Header() {
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

          <StyledNav>
            <NavLink href={'/'}>Home</NavLink>
            <NavLink href={'/products'}>Products</NavLink>
            <NavLink href={'/categories'}>Categories</NavLink>
            <NavLink href={'/account'}>Account</NavLink>
            <NavLink href={'/cart'}>Cart (0)</NavLink>
          </StyledNav>
        </Wrapper>
      </Container>
    </StyledHeader>
  )
}
