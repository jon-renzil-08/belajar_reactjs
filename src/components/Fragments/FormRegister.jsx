import Button from "../Elements/Button"
import InputForm from "../Elements/Input"

const FormRegister = () => {
	return (
		<form action="" className="mt-8 grid gap-4">
        <InputForm 
          label="Full Name"
          type="text"
          name="full_name"
          placeholder="input your full name"
        />
        <InputForm 
          label="Email"
          type="email"
          name="email"
          placeholder="@example.com"
        />
        <InputForm
          label="Password"
          type="password"
          name="password"
          placeholder="********"
        />
        <InputForm
          label="ConfirmPassword"
          type="password"
          name="password"
          placeholder="********"
        />
        <Button color="bg-blue-600">Register</Button>
      </form>
	)
}

export default FormRegister;