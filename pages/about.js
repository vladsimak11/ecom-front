import Image from 'next/image';

import Header from "@/components/Header/Header";
import Container from "../components/Container/Container";
import { Title, ListAbout, ItemHeader, ItemAbout } from "./about.styled";
import Footer from "@/components/Footer/Footer";

import About1280 from '../images/about/About1280.jpg';

export default function AboutPage() {
  return (
    <>
      <Header/>
      <Container>
        <Title>About Ecomm</Title>
        
        <ListAbout>
          <ItemAbout>
            Welcome to our online emporium, where style meets comfort – introducing our exclusive collection of hoodies that redefine casual fashion. Our eCommerce shop is your go-to destination for the trendiest and most comfortable hoodies that seamlessly blend fashion and functionality.
          </ItemAbout>

          <ItemAbout>
            <Image
              src={About1280}
              alt="About Ecomm" 
            />
          </ItemAbout>

          <ItemAbout>
            <ItemHeader>
              Trendsetting Designs
            </ItemHeader>
            Explore a diverse range of designs that cater to every taste and style preference. From classic solid colors to eye-catching prints and graphics, our hoodie collection is curated to keep you on the cutting edge of fashion. Whether you're into minimalist chic or bold statements, we have the perfect hoodie to express your individuality.
          </ItemAbout>

          <ItemAbout>
            <ItemHeader>
              Premium Quality Materials
            </ItemHeader>
            We believe in providing our customers with the utmost comfort, and that starts with the materials we use. Our hoodies are crafted from high-quality fabrics, ensuring durability, breathability, and a soft touch against your skin. Experience the luxury of lounging in style with our premium materials that stand the test of time.
          </ItemAbout>

          <ItemAbout>
            <ItemHeader>
              Unisex Appeal
            </ItemHeader>
            Fashion knows no boundaries, and neither do our hoodies. Embrace a wardrobe that transcends gender norms with our unisex collection. Whether you're shopping for yourself or looking for the perfect gift, our hoodies are designed to suit all body types and style preferences.
          </ItemAbout>

          <ItemAbout>
            <ItemHeader>
              Easy Online Shopping
            </ItemHeader>
            Browsing and buying your favorite hoodie has never been easier. Our user-friendly website offers a seamless shopping experience. With just a few clicks, you can explore our entire collection, choose your preferred size and color, and have your hoodie delivered right to your doorstep
          </ItemAbout>

          <ItemAbout>
            <ItemHeader>
              Customer Satisfaction Guarantee
            </ItemHeader>
            We take pride in our commitment to customer satisfaction. If, for any reason, you're not completely satisfied with your purchase, our hassle-free return policy ensures that you can shop with confidence. Your happiness is our priority.
          </ItemAbout>

          <ItemAbout>
            Dive into the world of comfort and style with our hoodie collection – where fashion meets function, and every purchase is a step towards expressing your unique identity. Shop now and embrace the cozy revolution!
          </ItemAbout>
        </ListAbout>

      </Container>

      <Footer/>
    </>
  )
}