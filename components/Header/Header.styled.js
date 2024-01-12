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
  color: #001f3f;
  font-size: 20px;
  line-height: 1.6;
`;