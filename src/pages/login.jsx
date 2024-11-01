import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin"
import Auth from "../components/Layouts/Auth"

const Login = () => {
	return (
	<Auth title="Login">
		<FormLogin/>
		<p className="mt-4 text-center">Dont have an account? <Link className="text-blue-600 font-bold text-lg" to="/register">Register</Link></p>
	</Auth>
	)
}

export default Login;