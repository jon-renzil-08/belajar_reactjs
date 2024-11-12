import { login } from "../../services/auth.service";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { useState } from "react";

const FormLogin = () => {

  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
   
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products"
      } else {
        setLoginFailed(res);
        console.log(res);
      }
    });
  };
  return (
    <form className="mt-8 grid gap-4" onSubmit={handleLogin}>
     {loginFailed && <p className="text-red-600 text-center">{loginFailed}</p>}
      <InputForm
        label="Username"
        type="text"
        name="username"
        placeholder="@example.com"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="********"
      />
      <Button color="bg-blue-600" type="submit">
        Login
      </Button>
    </form>
  );
};
export default FormLogin;
