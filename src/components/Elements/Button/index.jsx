const Button = (props) => {
  const { children, color, onClick = () => {}, type="button" } = props;
  return (
    <button type={type} className={`h-10 px-6 ${color} text-white rounded-md w-full `} 
    onClick={() => onClick()}>
      {children}
      
    </button>
  );
};

export default Button;
