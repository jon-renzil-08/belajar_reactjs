const Labels = (props) => {
	const { htmlFor, children} = props;
	return (
		<label htmlFor={htmlFor} className="block text-slate-700 font-semibold text-xl">{children}</label>
	)
}

export default Labels;