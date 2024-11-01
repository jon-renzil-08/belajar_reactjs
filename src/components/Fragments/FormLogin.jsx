import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
      <form action="" className="mt-8 grid gap-4">
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
        <Button color="bg-blue-600">Login</Button>
      </form>
  );
};
export default FormLogin;
