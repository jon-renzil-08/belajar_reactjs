const Input = (props) => {
	const { type, placeholder, name} = props;
	return (
		<input type={type}  className="w-full p-3 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:border-sky-500" placeholder={placeholder} name={name} />
	)
}

export default Input;