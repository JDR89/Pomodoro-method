import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  changeCompleted,
  deleteAllForLogin,
  deleteTask,
  editTask,
  setTasksFromFirebase,
} from "../store/tasksSlice";
import { db } from "../firebase/config";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore/lite";

export const useTasks = () => {
  const { tasks } = useSelector((state) => state.tasks);
  const { status, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const getTasksFromFirebase = async () => {
    if (user && user.uid !== "") {
      const { uid } = user;

      try {
        const tasksRef = collection(db, "users", uid, "tasks");

        const querySnapshot = await getDocs(tasksRef);

        // Crear un array con las tareas obtenidas
        const tasks = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
        }));

        return dispatch(setTasksFromFirebase(tasks));
      } catch (error) {
        console.error("Error fetching tasks: ", error);

        return [];
      }
    } else {
      return [];
    }
  };

  const startAddTask = async (task) => {
    if (task.description === "") return;

    if (user && user.uid !== "") {
      const { uid } = user;
      dispatch(addTask(task));
      try {
        const taskRef = doc(db, "users", uid, "tasks", task.id);

        // Agregar la tarea directamente usando el id especificado del front
        await setDoc(taskRef, task);

        
      } catch (error) {
        console.error("Error adding task: ", error);
        dispatch(deleteTask(task.id));
      }
    } else {
      const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const updatedTasks = [...existingTasks, task];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      dispatch(addTask(task));
    }
  };

  const startCompleted = async (id) => {
    if (status !== "authenticated") {
      const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

      const updatedTasks = existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });

      localStorage.setItem("tasks", JSON.stringify(updatedTasks));

      dispatch(changeCompleted(id));
    } else {
      if (user && user.uid !== "") {
        const { uid } = user;
        dispatch(changeCompleted(id));
        try {
          const taskRef = doc(db, "users", uid, "tasks", id);

          const taskSnap = await getDoc(taskRef);

          if (taskSnap.exists()) {
            // Obtener los datos de la tarea (sus atributos)
            const taskData = taskSnap.data();

            await updateDoc(taskRef, {
              completed: !taskData.completed,
            });

            
          } else {
            console.error("Task does not exist in Firebase");
            dispatch(changeCompleted(id));
          }
        } catch (error) {
          console.error("Error updating task completion: ", error);
          dispatch(changeCompleted(id));
        }
      }
    }
  };

  const startEditTask = async (editedTask) => {
    if (status !== "authenticated") {
      const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

      const updatedTasks = existingTasks.map((task) => {
        if (task.id === editedTask.id) {
          return { ...editedTask };
        }
        return task;
      });

      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      dispatch(editTask(editedTask));
    } else {
      if (user && user.uid !== "") {
        const { uid } = user;

        try {
          // Referencia al documento de la tarea en Firebase
          const taskRef = doc(db, "users", uid, "tasks", editedTask.id);

          // Actualizar la tarea con los nuevos datos
          await updateDoc(taskRef, {
            ...editedTask, // Reemplazar con los nuevos datos de la tarea editada
          });

          dispatch(editTask(editedTask));
        } catch (error) {
          console.error("Error editing task in Firebase: ", error);
        }
      }
    }
  };

  const startDeleteTask = async (id) => {
    if (status !== "authenticated") {
      const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

      const updateTasks = existingTasks.filter((task) => task.id !== id);

      localStorage.setItem("tasks", JSON.stringify(updateTasks));

      dispatch(deleteTask(id));
    } else {
      if (user && user.uid !== "") {
        const { uid } = user;
        dispatch(deleteTask(id));
        try {
          // Referencia al documento de la tarea en Firebase
          const taskRef = doc(db, "users", uid, "tasks", id);

          // Eliminar la tarea de Firebase
          await deleteDoc(taskRef);

          
        } catch (error) {
          console.error("Error deleting task from Firebase: ", error);
        }
      }
    }
  };

  const deleteAllLogin = () => {
    dispatch(deleteAllForLogin());
  };

  return {
    //Data
    tasks,

    //Métodos
    startAddTask,
    startCompleted,
    startEditTask,
    startDeleteTask,
    deleteAllLogin,
    getTasksFromFirebase,
  };
};
