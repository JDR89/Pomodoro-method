import { useForm } from "../../hooks/useForm";
import { useTasks } from "../../hooks/useTasks";

/* eslint-disable react/prop-types */
export const ModalEditTask = ({ task }) => {
    
  const { onInputChange, formState } = useForm({
    id: task.id,
    description: task.description,
    completed: task.completed,
  });

  const { startEditTask,startDeleteTask } = useTasks();

  const onSubmit = (e) => {
    e.preventDefault();
    
    startEditTask({...formState,completed:task.completed});
    document.getElementById(`modalEditTask-${task.id}`).close();
  };

  const handleDeleteTask=(id)=>{
    startDeleteTask(id)
    document.getElementById(`modalEditTask-${task.id}`).close()
  }

  return (
    <dialog id={`modalEditTask-${task.id}`} className="modal ">
      <div className="modal-box bg-[#fafafa] font-nunito">
        <form onSubmit={onSubmit} method="dialog">
          <input
            type="text"
            placeholder="What are you working on?"
            className="input input-ghost w-full focus:outline-none border-none font-nunito"
            value={formState.description}
            name="description"
            onChange={onInputChange}
          />

          <div className="modal-action flex justify-between">
            <button
              type="button"
              className="font-nunito bg-transparent text-[#462f2f] hover:font-bold"
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </button>
            <div>
              <button
                type="button"
                onClick={() =>
                  document.getElementById(`modalEditTask-${task.id}`).close()
                }
                className="btn border-none"
              >
                Cancel
              </button>

              <button
                className="btn bg-[#313133] text-[#fafafa] hover:bg-[#49494c]"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </dialog>
  );
};
