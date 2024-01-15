import { ButtonCart } from './Button.styled';

export default function Button({children, onClick, ...rest}) {
  return (
    <ButtonCart onClick={onClick} {...rest}>{children}</ButtonCart>
  )
}