import { usePomodoro } from "../../hooks/usePomodoro";

export const MenuTimer = () => {
  const { setTimer,pomodoroTime } = usePomodoro();

  return (
    <div className="flex justify-center mt-5 gap-3  ">
      <button
      onClick={() => setTimer(pomodoroTime)}
      className="btn btn-sm bg-[#FFFFFF1A] border-none text-[#fafafa] font-nunito  ">
        Pomodoro
      </button>

      <button
        onClick={() => setTimer(5)}
        className="btn btn-sm bg-[#FFFFFF1A] border-none text-[#fafafa] font-nunito "
      >
        Short break
      </button>

      <button
        onClick={() => setTimer(15)}
        className="btn btn-sm bg-[#FFFFFF1A] border-none text-[#fafafa] font-nunito "
      >
        Long break
      </button>
    </div>
  );
};
