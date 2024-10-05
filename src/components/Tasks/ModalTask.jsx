import { useForm } from "../../hooks/useForm";
import { useTasks } from "../../hooks/useTasks";

const initialTask = {
  id: "",
  description: "",
  completed: false,
};

export const ModalTask = () => {
  const { formState, onInputChange, onResetForm } = useForm(initialTask);
  const{startAddTask}=useTasks()

  const onSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      ...formState,
      id: Date.now().toString(),
      completed: false,
    };

    startAddTask(newTask);
    
    document.getElementById("modalTask").close();

    onResetForm();
  };

  const onCancel=()=>{
    document.getElementById("modalTask").close()

    onResetForm()
  }

  return (
    <>
      <dialog id="modalTask" className="modal ">
        <div className="modal-box bg-[#fafafa]">
          <form onSubmit={onSubmit} method="dialog">
            <input
              type="text"
              placeholder="What are you working on?"
              className="input input-ghost w-full focus:outline-none border-none font-nunito"
              name="description"
              onChange={onInputChange}
              value={formState.description}
            />

            <div className="modal-action">
              <button
                className="btn border-none"
                type="button"
                onClick={onCancel}
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
          </form>
        </div>
      </dialog>
    </>
  );
};
