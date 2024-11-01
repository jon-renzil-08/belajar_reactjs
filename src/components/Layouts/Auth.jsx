

const Auth = (props) => {
	const {title, children} = props;
  return (
    <div className="w-full max-w-xs">
      <h1 className="text-3xl font-bold text-blue-600 mb-2">{title}</h1>
      <p className="font-medium text-slate-500 text-md">
        Welcome, Please {title}
      </p>
			{children}
    </div>
  );
};

export default Auth;
