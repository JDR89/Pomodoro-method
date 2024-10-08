import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import tasksSlice from './tasksSlice'
import pomodoroSlice  from './pomodoroSlice'


export const store = configureStore({
  reducer: {
    auth: authSlice,
    tasks:tasksSlice,
    pomodoro: pomodoroSlice
  },
})