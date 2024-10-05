import { BiCheckCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";

export const LoginPage = () => {

  const userLogin = {
    email: "",
    password: "",
  };

  const { onInputChange, formState } = useForm(userLogin);
  const { startLoginUser,startGoogleLogin } = useAuth();

  const onSubmit = (e) => {
    e.preventDefault();

    startLoginUser(formState.email, formState.password);
  };

  return (
    <div
      style={{ border: "black solid " }}
      className="flex flex-col justify-center items-center min-h-screen bg-[#BA4949] " // Añadir 'items-center' aquí
    >
      <Link to="/" className="flex items-center justify-center mb-6 ">
        <BiCheckCircle className="text-red-400 w-8 h-8 mr-2" />
        <h1 className="text-2xl font-bold text-red-400">PomoPulse</h1>
      </Link>
      <h2 className="text-xl font-semibold mb-6 text-center">Login</h2>
      <div className="bg-white p-8 rounded-lg shadow-md w-80 h-[400px]">
        <div className="flex justify-center">
          <button onClick={startGoogleLogin} className="btn w-full">Login/Sign up with Google</button>
        </div>
        <div className="text-center text-sm text-gray-500 my-4">or</div>
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            name="email"
            onChange={onInputChange}
            value={formState.email}
            type="email"
            placeholder="example@mail.com"
          />
          <input
            name="password"
            onChange={onInputChange}
            value={formState.password}
            type="password"
            placeholder="Password"
          />
          <button
            onSubmit={onSubmit}
            className="btn w-full bg-gray-700  text-white hover:bg-gray-800"
          >
            Log in
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-gray-600 hover:underline">
            Forgot Password
          </a>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          Do not have an account?
          <Link to="/register" className="text-red-400 hover:underline ml-1">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};
