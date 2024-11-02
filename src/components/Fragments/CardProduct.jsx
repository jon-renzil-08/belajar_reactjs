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
     <img src={image} alt="Product Image" className="p-8 rounded-t-lg" />
    </a>
  );
};

const BodyCard = (props) => {
	const {children, title} = props;
  return (
    <div className="px-5 py-5">
      <a href="" className="font-bold text-xl tracking-tight text-gray-900">
        {title}
      </a>
      <p className="font-sm text-slate-500 text-justify">
       {children}
      </p>
    </div>
  );
};

const FooterCard = (props) => {
	const {price} = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-3xl font-bold text-gray-900">{price}</span>
      <a
        href=""
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Add to cart
      </a>
    </div>
  );
};

CardProduct.HeaderCard = HeaderCard;
CardProduct.BodyCard = BodyCard;
CardProduct.FooterCard = FooterCard;



export default CardProduct;
