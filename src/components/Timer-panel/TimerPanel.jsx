
import { MenuTimer } from "./MenuTimer"
import { Timer } from "./Timer"


export const TimerPanel = () => {
    
  return (
    <div className="flex justify-center  mt-10">
      <div className="flex flex-col w-full max-w-[556px] mx-4 bg-[#FFFFFF1A] h-[346px] rounded-md ">
        
        <MenuTimer />
        <Timer/>
        

      </div>
    </div>
  )
}
