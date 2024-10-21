import { createSlice } from "@reduxjs/toolkit";

export const pomodoroSlice = createSlice({
  name: "pomodoro",

  initialState: {
    pomodoroTime: 20,
    time: 20,
    acc:0
  },

  reducers: {
    setTime: (state, { payload }) => {
      state.time = payload;
    },

    setPomodoroTimeOption: (state, { payload }) => {
      state.pomodoroTime = payload;
    },
    
  },
});
// Action creators are generated for each case reducer function
export const { setTime, setPomodoroTimeOption,setpomoOrBreack } = pomodoroSlice.actions;
export default pomodoroSlice.reducer;
