import { Link } from "react-router-dom";
import { FaCheckCircle, FaUserCircle } from "react-icons/fa";
// import { TbReportSearch } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import { RiMenu4Fill } from "react-icons/ri";
import { CiLogin, CiKeyboard } from "react-icons/ci";
import { useAuth } from "../../hooks/useAuth";
import { useTasks } from "../../hooks/useTasks";
import { usePomodoro } from "../../hooks/usePomodoro";

export const Navbar = () => {
  const { startLogoutUser, status } = useAuth();
  const { deleteAllLogin } = useTasks();
  const { setTimer } = usePomodoro();

  const handleLogout = () => {
    startLogoutUser();
    deleteAllLogin();
  };

  return (
    <div
      style={{ borderBottom: "1.5px solid #9b9b9b" }}
      className="w-11/12 md:w-[45%] mx-auto"
    >
      <div className="navbar">
        <div className="flex-1">
          <FaCheckCircle color="#fafafa" size={20} />
          <h1 className="text-[15px] md:text-[20px] ml-1 font-nunito font-bold text-white">
            PomoPulse
          </h1>
        </div>
        <div className="flex gap-3">
          {/* {status === "authenticated" && (
            <Link to="/report">
              <div className="btn btn-sm bg-[#FFFFFF1A] border-none text-[#fafafa] font-nunito text-md font-thin">
                <TbReportSearch color="#fafafa" size={20} />
                <button  className="hidden lg:flex">Report</button>
              </div>
            </Link>
          )} */}

          <div className="dropdown">
            <button className="btn btn-sm bg-[#FFFFFF1A] border-none text-[#fafafa] font-nunito text-md font-thin">
              <IoIosSettings color="#fafafa" size={20} />
              <span className="hidden lg:flex">Setting</span>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 shadow bg-[#fafafa] rounded-box w-40 z-50"
            >
              <li>
                <button
                  onClick={() => setTimer(20)}
                  className="hover:bg-[#dc5a5a] hover:text-[#fafafa]"
                >
                  20 minutes
                </button>
              </li>
              <li>
                <button
                  onClick={() => setTimer(25)}
                  className="hover:bg-[#dc5a5a] hover:text-[#fafafa]"
                >
                  25 minutes
                </button>
              </li>
              <li>
                <button
                  onClick={() => setTimer(30)}
                  className="hover:bg-[#dc5a5a] hover:text-[#fafafa]"
                >
                  30 minutes
                </button>
              </li>
              <li>
                <button
                  onClick={() => setTimer(60)}
                  className="hover:bg-[#dc5a5a] hover:text-[#fafafa]"
                >
                  60 minutes
                </button>
              </li>
            </ul>
          </div>

          {status !== "authenticated" && (
            <Link to="/login">
              <div className="btn btn-sm bg-[#FFFFFF1A] border-none text-[#fafafa] font-nunito text-md font-thin">
                <FaUserCircle color="#fafafa" size={20} />
                <span className="hidden lg:flex">Sign in</span>
              </div>
            </Link>
          )}

          {/* Este es el botón del menú desplegable */}
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-sm bg-[#FFFFFF1A] border-none"
            >
              <RiMenu4Fill color="#fafafa" size={20} />
            </button>

            {/* Este es el menú desplegable */}
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3  shadow bg-[#fafafa] rounded-box w-40 right-0"
            >
              <li>
                <button className="hover:bg-[#dc5a5a] hover:text-[#fafafa]">
                  <CiLogin size={20} />
                  <span>
                    {status === "authenticated" ? (
                      <Link to="/">
                        {" "}
                        <div onClick={handleLogout}>Logout</div>
                      </Link>
                    ) : (
                      <Link to="/login">
                        {" "}
                        <div>Login</div>
                      </Link>
                    )}
                  </span>
                </button>
              </li>
              <li>
                <button className="hover:bg-[#dc5a5a] hover:text-[#fafafa]">
                  <CiKeyboard size={20} />
                  <span> Shortcuts</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
