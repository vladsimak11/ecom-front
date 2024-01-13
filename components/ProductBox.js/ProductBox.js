import { Box } from "./ProductBox.styled";

export default function ProductBox({product}) {

  const {_id, title, description, price} = product;

  return (
    <Box>{title}</Box>
  )
}