import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
	const error = useRouteError();
	return (
		<div className="flex flex-col justify-center items-center min-h-screen gap-3">
			<h1 className="text-3xl font-bold">Oops !!</h1>
			<p className="text-lg font-semibold">Sorry, an unexpected error has occurred.</p>
			<p>
				{error.statusText || error.message}
			</p>
		</div>
	)
}

export default ErrorPage;