
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";
import { FaGoogle } from "react-icons/fa";
import { BiCheckCircle } from "react-icons/bi";


export const LoginPage = () => {

  const userLogin = {
    email: "",
    password: "",
  };

  const { onInputChange, formState } = useForm(userLogin);
  const { startLoginUser,startGoogleLogin } = useAuth();

  const onSubmit = (e) => {
    e.preventDefault();
    if(formState.email === "" || formState.password === "")return

    startLoginUser(formState.email, formState.password);
  };

  return (
    <div
      
      className="flex flex-col justify-center items-center min-h-screen bg-[#BA4949] " // Añadir 'items-center' aquí
    >
      <Link to="/" className="flex items-center justify-center mb-6 ">
        <BiCheckCircle className="text-red-400 w-8 h-8 mr-2" />
        <h1 className="text-2xl font-bold text-red-400">PomoPulse</h1>
      </Link>
      
      <div className="bg-white p-8 rounded-lg shadow-md w-80 h-[400px]">
        <div className="flex justify-center">
          <button onClick={startGoogleLogin} className="btn w-full bg-gray-700  text-white hover:bg-gray-800">Login/Sign up with Google
            <FaGoogle />
          </button>
        </div>
        <div className="text-center text-sm text-gray-500 my-4">or</div>
        <form onSubmit={onSubmit} className="space-y-4">
          <input
          className="w-full"
            name="email"
            onChange={onInputChange}
            value={formState.email}
            type="email"
            placeholder="example@mail.com"
            disabled
          />
          <input
          className="w-full"
            name="password"
            onChange={onInputChange}
            value={formState.password}
            type="password"
            placeholder="Password"
            disabled
          />
          <button
            onSubmit={onSubmit}
            className="btn w-full bg-gray-700  text-white hover:bg-gray-800"
          >
            Log in
          </button>
        </form>
        {/* <div className="mt-4 text-center">
          <a href="#" className="text-sm text-gray-600 hover:underline">
            Forgot Password
          </a>
        </div> */}

        {/* <div className="mt-6 text-center text-sm text-gray-600">
          Do not have an account?
          <Link to="/register" className="text-red-400 hover:underline ml-1">
            Create account
          </Link>
        </div> */}
      </div>
    </div>
  );
};
