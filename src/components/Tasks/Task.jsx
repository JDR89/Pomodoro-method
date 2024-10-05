/* eslint-disable react/prop-types */
import { CiMenuFries } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { useTasks } from "../../hooks/useTasks";
import { ModalEditTask } from "./ModalEditTask";

export const Task = ({ task }) => {
  const { startCompleted } = useTasks();

  return (
    <>
      <div className="flex items-center justify-between border border-gray-300 rounded-lg p-2 shadow-sm min-h-16 bg-[#fafafa] mt-1.5  ">
        
        <div className="flex items-center space-x-2">
          <button
          type="checkbox"
            onClick={() => startCompleted(task.id)}
            className="rounded-full bg-gray-200 w-6 h-6 flex items-center justify-center shadow-sm active:shadow-none active:translate-y-1 transition duration-150"
          >
            <FaCheckCircle
              color={` ${task.completed ? "green" : "#BA4949"}`}
              size={20}
            />
          </button>
          
          <span
            className={`${
              task.completed ? "line-through" : ""
            } font-semibold text-[#202036] font-nunito  `}
          >
            {task.description}
          </span>
        </div>

       
        <div className="flex items-center space-x-2">
          {/* Contador */}
          {/* <span className="text-gray-500 text-sm">1 / 1</span> */}

          <button
            onClick={() => document.getElementById(`modalEditTask-${task.id}`).showModal()}
          >
            <CiMenuFries size={20} color="#BA4949" />
          </button>
        </div>
      </div>

      <ModalEditTask task={task} />
    </>
  );
};
