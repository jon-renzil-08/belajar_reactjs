import { Fragment, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    name: "Sepatu Sneakers",
    image: "/images/shoes1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, aut temporibus neque eius repellendus illo id numquam natus facilis provident?",
    price: 1000000,
  },
  {
    id: 2,
    name: "Sepatu Nike",
    image: "/images/shoes1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, aut temporibus neque eius repellendus illo id numquam natus facilis provident?",
    price: 20000000,
  },
  {
    id: 3,
    name: "Sepatu Adidas",
    image: "/images/shoes1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, aut temporibus neque eius repellendus illo id numquam natus facilis provident?",
    price: 3000000,
  },
  {
    id: 4,
    name: "Sepatu Adidas",
    image: "/images/shoes1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, aut temporibus neque eius repellendus illo id numquam natus facilis provident?",
    price: 4000000,
  },
];

const email = localStorage.getItem("email");

const Products = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id: id, qty: 1 }]);
    }
  };

  return (
    <Fragment>
      <div className="bg-blue-600 w-full h-20 flex items-center justify-end px-3 ">
        <div className="flex gap-5 items-center">
          <span className="text-white">{email}</span>
          <Button
            onClick={handleLogout}
            color="bg-black hover:shadow-lg font-semibold"
          >
            Logout
          </Button>
        </div>
      </div>
      <div className="flex gap-3 my-3 mx-3">
        <div className="w-3/4 flex flex-wrap gap-3">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.HeaderCard image={product.image} />
              <CardProduct.BodyCard name={product.name}>
                {product.description}
              </CardProduct.BodyCard>
              <CardProduct.FooterCard
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/4">
          <h1 className="text-3xl font-bold text-blue-600">Card</h1>
          <table className="w-full table-auto text-left border-separate border-spacing-2 border-x-black">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(product.price * item.qty).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className="flex justify-center mb-3">
        <Counter></Counter>
      </div> */}
    </Fragment>
  );
};

export default Products;
