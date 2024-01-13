import Link from 'next/link';
import styled from 'styled-components';


export const StyledHeader = styled.header`
  background-color: #d3d3d3;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
`;

export const NavLink = styled(Link)`
  position: relative;
  color: var(--main-color);
  font-size: 20px;
  line-height: 1.6;

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 3px;
    left: 50%;
    position: absolute;
    background: var(--second-color);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  &:hover:after, &:active:after { 
    width: 100%; 
    left: 0; 
  }   
`;