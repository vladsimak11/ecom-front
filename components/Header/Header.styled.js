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
  ${props => props.mobileNavActive ? `
    display: block;
  ` : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 100px 20px 20px;
  background-color: #d3d3d3;

  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  position: relative;
  color: var(--main-color);
  font-size: 24px;
  line-height: 1.8;

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

export const NavButton = styled.button`
  background-color: transparent;
  width: 50px;
  height: 50px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  
  @media screen and (min-width: 768px) {
    display: none;
  }
`;