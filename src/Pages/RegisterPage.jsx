import { BiCheckCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useAuth } from "../hooks/useAuth";

export const RegisterPage = () => {

  const userCreate = {
    email: "",
    password: "",
    password2: "",
  };

  const { onInputChange, formState } = useForm(userCreate);
  const { startRegisterUser } = useAuth();

  const onSubmit = (e) => {
    e.preventDefault();
    if(formState.password !== formState.password2){
      console.log("Las contraseñas no coinciden");
      return
    }
    
   startRegisterUser(formState.email, formState.password);
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
      <h2 className="text-xl font-semibold mb-6 text-center">Create account</h2>
      <div className="bg-white p-8 rounded-lg shadow-md w-80 h-[400px]">
       
        <form onSubmit={onSubmit} className="gap-2 flex flex-col">
          <input
            onChange={onInputChange}
            name="email"
            value={formState.email}
            type="email"
            placeholder="example@mail.com"
          />
          <input
            onChange={onInputChange}
            name="password"
            value={formState.password}
            className="mt-3"
            type="password"
            placeholder="Password"
          />
          <input
            onChange={onInputChange}
            name="password2"
            value={formState.password2}
            type="password"
            placeholder="Repeat password"
          />
          <button
            onClick={onSubmit}
            className="btn w-full bg-gray-700  text-white hover:bg-gray-800"
          >
            Log in with Email
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          have an account?
          <Link to="/login" className="text-red-400 hover:underline ml-1">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};
