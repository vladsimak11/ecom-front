import { StyledButton } from './Button.styled';

export default function Button({name}) {
  return (
    <StyledButton href={'/products'}>{name}</StyledButton>
  )
}