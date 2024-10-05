import { TasksGrid } from "../components/Tasks/TasksGrid";
import { TimerPanel } from "../components/Timer-panel/TimerPanel";
import { Footer } from "../components/UI/Footer";
import { Navbar } from "../components/UI/Navbar";
import { TaskNavbar } from "../components/UI/TaskNavbar";

export const LandingPage = () => {
  return (
    <div className="flex flex-col  min-h-screen bg-[#BA4949]  ">
      <Navbar />
      <TimerPanel />
      <TaskNavbar />
      <TasksGrid />
      <Footer />
    </div>
  );
};
