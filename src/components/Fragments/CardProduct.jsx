import Products from "../../pages/products";
import Button from "../Elements/Button";
const CardProduct = (props) => {
	const {children} = props;
  return (
    <div className="w-full max-w-sm bg-lime-300 border border-gray-200 rounded-lg shadow">
      {children}
    </div>
  );
};

const HeaderCard = (props) => {
	const {image} = props;
  return (
    <a href="">
     <img src={image} alt="Product Image" className="p-8 rounded-t-lg w-full h-60 object-cover" />
    </a>
  );
};

const BodyCard = (props) => {
	const {children, name} = props;
  return (
    <div className="px-5 py-5">
      <a href="" className="font-bold text-xl tracking-tight text-gray-900">
        {name}
      </a>
      <p className="font-sm text-slate-500 text-justify">
       {children.substring(0, 50)}...
      </p>
    </div>
  );
};

const FooterCard = (props) => {
	const {price, handleAddToCart, id} = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-gray-900">{price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</span>
      <Button color="bg-black hover:shadow-lg font-semibold  w-1/2" onClick={() =>handleAddToCart(id)}  >Add to cart</Button>
    </div>
  );
};

CardProduct.HeaderCard = HeaderCard;
CardProduct.BodyCard = BodyCard;
CardProduct.FooterCard = FooterCard;



export default CardProduct;
