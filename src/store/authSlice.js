import { createSlice } from "@reduxjs/toolkit";


const userFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : {
      uid: "",
      email: "",
      name: "",
    };

export const authSlice = createSlice({
  name: "auth",

  initialState: {
    status: userFromLocalStorage.uid ? "authenticated" : "not-authenticated",
    user: userFromLocalStorage,
    errorMessage: undefined,
    loading: false,
  },
  reducers: {
    onChecking: (state) => {
      state.status = "checking";
      state.user = {
        uid: "",
        email: "",
        name: "",
      };
      state.errorMessage = undefined;
      state.loading = true;
    },

    onLogin: (state, { payload }) => {
      
      state.status = "authenticated";
      state.user = {
        uid: payload.uid,
        email: payload.email,
        name: payload.name,
      };
      state.errorMessage = undefined;
      state.loading = false;
    },

    onLogout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.user = {
        uid: "",
        email: "",
        name: "",
      };
      state.errorMessage = payload;
      state.loading = false;
    },

    clearErrorMessagge: (state) => {
      state.errorMessage = undefined;
    },
  },
});
// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout, clearErrorMessagge } =
  authSlice.actions;
export default authSlice.reducer;


