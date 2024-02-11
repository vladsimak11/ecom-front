import Container from "../Container/Container";
import { Title, MainTextList, MainTextHeader, MainTextItem } from "./MainText.styled";

export default function MainText() {
  return (
    <div>
      <Container>
        <Title>Key Advantages</Title>
        <MainTextList>
          <div>
            <MainTextHeader>
              Versatility
            </MainTextHeader>
            <MainTextItem>
              Our hoodie store offers a wide range of styles, colors, and designs, catering to diverse tastes and preferences. Whether you're into a classic, minimalist look or a bold, statement piece, we've got you covered. 
            </MainTextItem>
          </div>

          <div>
            <MainTextHeader>
              Quality Craftsmanship
            </MainTextHeader>
            <MainTextItem>
              We take pride in the quality of our hoodies. Each piece is crafted with precision and attention to detail, ensuring durability and comfort. Our commitment to using premium materials means that our hoodies not only look good but also stand the test of time. 
            </MainTextItem>
          </div>

          <div>
            <MainTextHeader>
              Accessible Pricing
            </MainTextHeader>
            <MainTextItem>
              We believe that everyone deserves to experience the joy of owning a high&#8211;quality hoodie without breaking the bank. That's why our store offers affordable pricing without compromising on style or quality. Fashion&#8211;forward choices are within reach for everyone! 
            </MainTextItem>
          </div>

        </MainTextList>
      </Container>
    </div>
  )
}