import Link from 'next/link';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  font-size: 20px;
  background-color: var(--second-color);
  color: var(--default-color);
  padding: 15px 25px;
  border-radius: 5px;
  transition: var(--main-transition);

  &:hover {
    background-color: var(--default-color);
    color: var(--main-color);
  }
`;

