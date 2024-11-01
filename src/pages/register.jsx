
import FormRegister from "../components/Fragments/FormRegister";
import Auth from "../components/Layouts/Auth";

const Register = () => {
	return (
		<Auth title="Register" type="register">
			<FormRegister/>
			
		</Auth>
	)
}

export default Register;