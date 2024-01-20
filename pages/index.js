import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import NewProducts from "@/components/NewProducts/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage({newProducts}) {

  return (
    <div>
      <Header />
      <Hero/>
      <NewProducts products={newProducts} />
    </div>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();

  const newProducts = await Product.find({}, null, {sort: {'_id': -1}, limit: 8});

  return {
    props: {
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    }
  }
}
