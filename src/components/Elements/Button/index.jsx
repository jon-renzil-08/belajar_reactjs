const Button = (props) => {
  const { children, color } = props;
  return (
    <button className={`h-10 px-6 ${color} text-white rounded-md`}>
      {children}
    </button>
  );
};

export default Button;
