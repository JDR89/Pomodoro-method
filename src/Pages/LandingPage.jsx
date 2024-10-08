import { TasksGrid } from "../components/Tasks/TasksGrid";
import { TimerPanel } from "../components/Timer-panel/TimerPanel";
import { Footer } from "../components/UI/Footer";
import { Navbar } from "../components/UI/Navbar";
import { TaskNavbar } from "../components/UI/TaskNavbar";
import { usePomodoro } from "../hooks/usePomodoro";

export const LandingPage = () => {

  const{time}=usePomodoro()

  const wallpaper=(timer)=>{
    if(timer === 5) return "bg-[#f2a37e]"
    if(timer === 15) return "bg-[#eb7554]"
    return "bg-[#BA4949]"
  }

  return (
    <div className={`flex flex-col  min-h-screen ${wallpaper(time)}  `}>
      <Navbar />
      <TimerPanel />
      <TaskNavbar />
      <TasksGrid />
      <Footer />
    </div>
  );
};
