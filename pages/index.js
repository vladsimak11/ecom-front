import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import MainText from "@/components/MainText/MainText";
import NewProducts from "@/components/NewProducts/NewProducts";
import Presents from "@/components/Presents/Presents";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage({newProducts}) {

  return (
    <div>
      <Header />
      <Hero/>
      <NewProducts products={newProducts} />
      <Presents />
      <MainText/>
      <Footer/>
    </div>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();

  const newProducts = await Product.find({}, null, {sort: {'_id': -1}, limit: 4});

  return {
    props: {
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    }
  }
}
