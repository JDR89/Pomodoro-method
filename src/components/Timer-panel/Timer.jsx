import { useState, useEffect, useRef } from "react";
import { FaRepeat } from "react-icons/fa6";
import { usePomodoro } from "../../hooks/usePomodoro";


export const Timer = () => {
  const { time,setTimer } = usePomodoro();
  

  const initialMinutes = time; // Tiempo inicial en minutos
  const [seconds, setSeconds] = useState(initialMinutes * 60); // Estado del tiempo en segundos
  const [isRunning, setIsRunning] = useState(false); // Controla si el temporizador está en marcha
  const startTimeRef = useRef(null); // Hora de inicio
  const expectedEndTimeRef = useRef(null); // Hora en que se espera que termine el temporizador

  const playSound = () => {
    const audio = new Audio('/clickButton.wav');
    audio.play();
  };

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      // Si el temporizador está corriendo, establecer el intervalo
      intervalId = setInterval(() => {
        const currentTime = Date.now();
        const timeRemaining = Math.max(
          Math.floor((expectedEndTimeRef.current - currentTime) / 1000),
          0
        );
        setSeconds(timeRemaining); // Actualizar el tiempo restante

        if (timeRemaining === 0) {
          setIsRunning(false); // Detener el temporizador cuando llega a 0
          clearInterval(intervalId);
          setTimer(5)
          
        }
      }, 1000); // Se ejecuta cada segundo
    }

    return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar o cambiar el estado
  }, [isRunning]);

  const startOrPauseTimer = () => {
    if (!isRunning) {
      // Si el temporizador no estaba corriendo, iniciar
      const currentTime = Date.now();
      startTimeRef.current = currentTime;
      expectedEndTimeRef.current = currentTime + seconds * 1000; // Calcula la hora en la que debe terminar

      playSound();
    }
    setIsRunning((prev) => !prev); // Cambia el estado de ejecución
    playSound();
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(initialMinutes * 60);
    startTimeRef.current = null;
    expectedEndTimeRef.current = null; // Resetear las referencias de tiempo
  };

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  

  useEffect(() => {
    resetTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  return (
    <div className="flex flex-col items-center mt-10">
      <span className="countdown font-nunito font-bold text-[100px] md:text-[130px] text-[#fafafa]">
        <span style={{ "--value": minutes }}></span>:
        <span
          style={{
            "--value":
              remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds,
          }}
        ></span>
      </span>
      <div className="flex gap-5 items-center">
        <button
          onClick={startOrPauseTimer}
          className={`btn btn-lg px-20 bg-[#fafafa] border-[#fafafa] text-[#BA4949] text-xl uppercase transition-all duration-200 active:translate-y-1 active:shadow-none hover:bg-[#fafafa] hover:border-[#fafafa] mt-5 ${
            isRunning ? "shadow-none" : "shadow-md shadow-[#1a1a2e]"
          }`}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={resetTimer}
          className={` btn btn-sm bg-[#fafafa] border-[#fafafa] text-[#BA4949] transition-all duration-200 active:translate-y-1 active:shadow-none hover:bg-[#fafafa] hover:border-[#fafafa] mt-5 shadow-md shadow-[#1a1a2e]`}
        >
          <FaRepeat />
        </button>
      </div>
    </div>
  );
};
