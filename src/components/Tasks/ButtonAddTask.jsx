import { CiCirclePlus } from "react-icons/ci";

export const ButtonAddTask = () => {
  return (
    <button
      onClick={() => document.getElementById("modalTask").showModal()}
      className="w-full mt-1.5  "
    >
      <div>
        <div className="flex items-center justify-center rounded-lg p-2 shadow-sm h-16 bg-[#a04040] hover:bg-[#923b3b]  ">
          <div className="flex items-center  space-x-2">
            <CiCirclePlus size={25} color="#fafafa" />
            <p className="font-nunito text-[#fafafa]">Add task</p>
          </div>
        </div>
      </div>
    </button>
  );
};
