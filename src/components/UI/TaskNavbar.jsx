import {  CiMenuKebab } from "react-icons/ci";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { useTasks } from "../../hooks/useTasks";


export const TaskNavbar = () => {

  const{deleteAllTasks,deleteDoneTasks}=useTasks()

  return (
    <div
      style={{ borderBottom: "1px solid #cccccc" }}
      className="w-11/12  md:w-2/3 lg:w-1/3 mx-auto mt-10   "
    >
      <div className="navbar ">
        <div className="flex-1">
          <h1 className="text-[15px] md:text-[20px] ml-1 font-nunito font-bold text-white ">
            Tasks
          </h1>
        </div>
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-sm bg-[#FFFFFF1A] border-none"
          >
            <CiMenuKebab color="#fafafa" size={20} />
          </button>

          {/* Este es el menú desplegable */}
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3  shadow bg-[#fafafa] rounded-box w-60 right-0"
          >
            <li>
              <button onClick={deleteDoneTasks} className="hover:bg-[#dc5a5a] hover:text-[#fafafa]">
              <FaDeleteLeft size={20} />
                Clear finished tasks
              </button>
            </li>

            <li>
              <button onClick={deleteAllTasks} className="hover:bg-[#dc5a5a] hover:text-[#fafafa]">
              <MdDeleteForever size={20} />
                Clear all tasks
              </button>
            </li>


          </ul>
        </div>
      </div>
    </div>
  );
};
