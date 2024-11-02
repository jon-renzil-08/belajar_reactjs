import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Sneakers",
    image: "/images/shoes1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, aut temporibus neque eius repellendus illo id numquam natus facilis provident?",
    price: "Rp.1000.000`",
  },
  {
    id: 2,
    name: "Sepatu Nike",
    image: "/images/shoes1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, aut temporibus neque eius repellendus illo id numquam natus facilis provident?",
    price: "Rp.2000.000",
  },
];

const Products = () => {
  return (
    <div className="flex gap-3 justify-center items-center h-screen">
      {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.HeaderCard image={product.image} />
          <CardProduct.BodyCard name={product.name}>
            {product.description}
          </CardProduct.BodyCard>
          <CardProduct.FooterCard price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default Products;
