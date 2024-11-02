import CardProduct from "../components/Fragments/CardProduct";

const Products = () => {
  return (
    <div className="flex gap-3 justify-center items-center h-screen">
      <CardProduct>
        <CardProduct.HeaderCard image="/images/shoes1.jpg"/>
        <CardProduct.BodyCard title="Sepatu Sneakers">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, aut
          temporibus neque eius repellendus illo id numquam natus facilis
          provident?
        </CardProduct.BodyCard>
        <CardProduct.FooterCard price="Rp 1000.000"/>
      </CardProduct>
      <CardProduct>
        <CardProduct.HeaderCard image="/images/shoes1.jpg"/>
        <CardProduct.BodyCard title="Sepatu Sneakers">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, aut
          temporibus neque eius repellendus illo id numquam natus facilis
          provident?
        </CardProduct.BodyCard>
        <CardProduct.FooterCard price="Rp 1000.000"/>
      </CardProduct>
    </div>
  );
};

export default Products;
