import { StyledLink } from './LinkBtn.styled';

export default function LinkBtn({children}) {
  return (
    <StyledLink href={'/products'}>{children}</StyledLink>
  )
}