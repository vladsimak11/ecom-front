import Container from "../Container/Container";
import { BackgroundHero, StyledTitle, StyledDesc } from './Hero.styled';

import Hero1280 from '../../images/hero/hero-1280.jpg';
import Hero2560 from '../../images/hero/hero-2560.jpg';

const imagesHero = {
  Hero1280,
  Hero2560
}

export default function Hero() {
  return(
    <div>
      <Container>
        <BackgroundHero images={imagesHero}>
          <StyledTitle><b>Ecomm:</b> Step into Comfort, Step into Style -<br /> Explore Our Top Picks Today!</StyledTitle>
          <StyledDesc>Welcome to <b>Ecomm</b>, your go-to destination for the trendiest and coziest hoodies! Step into a world where comfort meets style, and explore a curated collection of premium hoodies that effortlessly blend fashion and functionality. Our shop is a haven for hoodie enthusiasts, offering a diverse range of designs, colors, and materials to suit every taste.</StyledDesc>
        </BackgroundHero>
      </Container>
    </div>
  )
}