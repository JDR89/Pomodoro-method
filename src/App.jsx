import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { LoginPage } from "./Pages/LoginPage";

import { useAuth } from "./hooks/useAuth";
import { useTasks } from "./hooks/useTasks";
import { useEffect } from "react";

function App() {
  const { status  } = useAuth();
  const {deleteAllLogin,getTasksFromFirebase} = useTasks()

  useEffect(() => {
    if (status === "authenticated") {
      // Eliminar las tareas del localStorage si el usuario está autenticado
      localStorage.removeItem("tasks");
      deleteAllLogin()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);
  
  useEffect(() => {
    getTasksFromFirebase()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])
  
  
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={status === "authenticated" ? <Navigate to="/" /> : <LoginPage />}
        />
        
        <Route path="/*" element={<LandingPage />} />

        <Route
          path="/report"
          element={
            status === "authenticated" ? (
              <h1>Report</h1>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
