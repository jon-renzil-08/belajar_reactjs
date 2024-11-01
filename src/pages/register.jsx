import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FormRegister";
import Auth from "../components/Layouts/Auth";

const Register = () => {
	return (
		<Auth title="Register">
			<FormRegister/>
			<p className="mt-4 text-center">Already have an account? <Link className="text-blue-600 font-bold text-lg" to="/login">Login</Link></p>
		</Auth>
	)
}

export default Register;