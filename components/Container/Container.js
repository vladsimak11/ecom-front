import { StyledDiv } from './Container.styled';

export default function Container({children}) {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  )
}