import styled from 'styled-components';

export const ButtonCart = styled.button`
  font-size: 20px;
  background-color: var(--second-color);
  color: var(--default-color);
  padding: 4px 16px;
  border: 2px solid transparent;
  border-radius: 5px;
  transition: var(--main-transition);

  &:hover {
    background-color: var(--default-color);
    color: var(--main-color);
    border-color: var(--main-color);
  }
`;

