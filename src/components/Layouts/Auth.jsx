import { Link } from "react-router-dom";

const Auth = (props) => {
  const { title, children, type } = props;
  return (
    <div className=" min-h-screen flex justify-center items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">{title}</h1>
        <p className="font-medium text-slate-500 text-md">
          Welcome, Please {title}
        </p>
        {children}

        {/* Conditional Rendering starts */}
        <p className="mt-4 text-center">
          {type === "login"
            ? " Don't have an account? "
            : " Already have an account? "}
          {type === "login" && (
            <Link className="text-blue-600 font-bold text-lg" to="/register">
              Register
            </Link>
          )}
          {type === "register" && (
            <Link className="text-blue-600 font-bold text-lg" to="/login">
              Login
            </Link>
          )}
        </p>
        {/* Conditional Rendering ends */}

        {/* Navigation Component Condintional Rendering starts */}
        {/* <Navigation type={type} /> */}
        {/* Navigation Component Condintional Rendering end */}
      </div>
    </div>
  );
};

// Conditional Rendering dengan memebuat component baru

// const Navigation = (type) => {
//   if (type === "login") {
//     return (
//       <p className="mt-4 text-center">Dont have an account? <Link className="text-blue-600 font-bold text-lg" to="/register">Register</Link></p>
//     )
//   } else {
//     return (
//       <p className="mt-4 text-center">Already have an account? <Link className="text-blue-600 font-bold text-lg" to="/login">Login</Link></p>
//     )
//   }
// }

export default Auth;
