import { createSlice } from "@reduxjs/toolkit";

const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];

export const tasksSlice = createSlice({
  name: "tasks",

  initialState: {
    loading: false,
    tasks: initialTasks
  },

  reducers: {
    addTask: (state, { payload }) => {
      state.tasks.push(payload);
    },

    changeCompleted: (state, { payload }) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === payload) {
          task.completed = !task.completed;
        }
        return task;
      });
    },

    editTask: (state, { payload }) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === payload.id) {
          
          return { ...task, ...payload };
        }
        return task;
      });
    },

    deleteTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((task) => task.id !== payload);
    },

    deleteAllForLogin:(state)=>{
      state.tasks = []
    },

    setTasksFromFirebase: (state, { payload }) => {
      state.tasks = payload;
    }
  },
});
// Action creators are generated for each case reducer function
export const { addTask,changeCompleted,deleteTask,editTask,deleteAllForLogin,setTasksFromFirebase } = tasksSlice.actions;
export default tasksSlice.reducer;
