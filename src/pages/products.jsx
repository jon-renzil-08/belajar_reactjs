import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";
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

const email = localStorage.getItem("email");

const handleLogout = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  window.location.href = "/login";
}


const Products = () => {
  return (
    <Fragment>
      <div className="bg-blue-600 w-full h-20 flex items-center justify-end px-3 ">
        <div className="flex gap-5 items-center">
          <span className="text-white">{email}</span>
        <Button onClick={handleLogout} color="bg-black hover:shadow-lg font-semibold">Logout</Button>
        </div>
      </div>
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
      <div className="flex justify-center mb-3">
        <Counter></Counter>
      </div>
    </Fragment>
  );
};

export default Products;
