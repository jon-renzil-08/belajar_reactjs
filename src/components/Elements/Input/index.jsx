import Input from "./input";
import Labels from "./Labels";

const InputForm = (props) => {
	const {label, type, placeholder, name} = props;
  return <div className="grid gap-2">
		<Labels htmlFor={name}>{label}</Labels>
		<Input type={type} placeholder={placeholder} name={name} />
	</div>;
};

export default InputForm;
