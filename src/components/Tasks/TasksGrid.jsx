

import { useTasks } from "../../hooks/useTasks";
import { ButtonAddTask } from "./ButtonAddTask";
import { ModalTask } from "./ModalTask";
import { Task } from "./Task";


export const TasksGrid = () => {
  const {tasks } = useTasks()


  
 
  return (
    <div className="w-11/12 md:w-2/3 lg:w-[33%] mx-auto mt-4 flex-grow ">
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}

        <ButtonAddTask />
        <ModalTask />
      </ul>
    </div>
  );
};
