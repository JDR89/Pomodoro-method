import { useDispatch, useSelector } from "react-redux";
import { setPomodoroTimeOption, setTime } from "../store/pomodoroSlice";

export const usePomodoro = () => {
  const dispatch = useDispatch();
  const { time, pomodoroTime } = useSelector((state) => state.pomodoro);

  const setTimer = (time) => {
    dispatch(setTime(time));
    if (time >= 20) {
      dispatch(setPomodoroTimeOption(time));
    }
    return;
  };

  return {
    //Data
    time,
    pomodoroTime,
    //Métodos
    setTimer,
  };
};
