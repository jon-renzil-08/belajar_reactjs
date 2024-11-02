import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products"
  };
  return (
      <form  className="mt-8 grid gap-4" onSubmit={handleLogin}>
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
        <Button color="bg-blue-600" type="submit" >Login</Button>
      </form>
  );
};
export default FormLogin;
