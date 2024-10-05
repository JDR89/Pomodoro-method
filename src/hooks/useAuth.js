import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { onChecking, onLogin, onLogout } from "../store/authSlice";


export const useAuth = () => {
  const dispatch = useDispatch();
  const{status}=useSelector(state=>state.auth)



  const startRegisterUser = async (email, password) => {
    dispatch(onChecking())
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      dispatch(onLogin(user));
      localStorage.setItem('user', JSON.stringify(user))
    } catch (error) {
      console.error("Error al registrar el usuario:", error.message);
    }
  };

  const startLoginUser = async (email, password) => {
    dispatch(onChecking())
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      
      dispatch(onLogin({uid:user.uid,name:user.auth.displayName,email:user.email}));
      localStorage.setItem('user', JSON.stringify(user))

    } catch (error) {
      
      console.error("Error al iniciar sesión:", error.message);
    }
  };

  const startLogoutUser = async () => {
    try {
      await signOut(auth);
      dispatch(onLogout())
      localStorage.removeItem('user')
      
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };


  const startGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    dispatch(onChecking()); // Cambia el estado a 'checking'
    
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Llamamos la acción para almacenar el usuario en el estado de Redux
      dispatch(onLogin({ uid: user.uid, email: user.email, name: user.displayName }));
      
      // Puedes almacenar el usuario en localStorage si lo deseas
      localStorage.setItem('user', JSON.stringify({
        uid: user.uid,
        email: user.email,
        name: user.displayName,
      }));
    } catch (error) {
      console.error("Error al autenticar con Google:", error);
    }
  };

  return {
    //Data
    status,
    //Métodos
    startRegisterUser,
    startLoginUser,
    startLogoutUser,
    startGoogleLogin,
  };
};
