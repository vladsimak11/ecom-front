import { ButtonCart } from './Button.styled';

export default function Button({children}) {
  return (
    <ButtonCart type="button">{children}</ButtonCart>
  )
}