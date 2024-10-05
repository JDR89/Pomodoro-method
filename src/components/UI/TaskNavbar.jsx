import { CiMenuKebab } from "react-icons/ci";
export const TaskNavbar = () => {
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
        <div className="">
          <button className="btn btn-sm bg-[#FFFFFF1A] border-none ">
           <CiMenuKebab size={20} color={"#fafafa"}/>
          </button>
        </div>
      </div>
    </div>
  );
};
