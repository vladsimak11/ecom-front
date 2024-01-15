import styled, {css} from 'styled-components';

export const ButtonStyle = css`
  font-size: 20px;
  padding: 4px 16px;
  border: 2px solid transparent;
  border-radius: 5px;
  transition: var(--main-transition);

${props => props.default && css`
  background-color: var(--second-color);
  color: var(--default-color);

  &:hover {
    background-color: var(--default-color);
    color: var(--main-color);
    border-color: var(--main-color);
  }

`}

${props => props.primary && css`
  background-color: var(--main-color);
  color: var(--default-color);

  &:hover {
    background-color: var(--default-color);
    color: var(--main-color);
    border-color: var(--main-color);
  }
  
`}

${props => props.block && css`
  display: block;
  width: 100%;
`} 

`;

export const ButtonCart = styled.button`
  ${ButtonStyle}
`;

