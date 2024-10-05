import { createSlice } from '@reduxjs/toolkit';

export const timerSlice = createSlice({
name: 'timer',
initialState: {
time: 0

},

reducers: {
setTime: (state, {payload}) => {
 state.time = payload
 },
}
});
// Action creators are generated for each case reducer function
export const { setTime } = timerSlice.actions;
export default timerSlice.reducer