import { Link } from "react-router-dom";
import logo from "../../../assets/images (5) (1).jpeg";
import useContexts from "../../../hooks/useContexts";
const Navbar = () => {
  const { user, handleLogout } = useContexts();
  const handleLogouts = () => {
    handleLogout();
  };
  return (
    <div className="navbar ">
      <div className=" flex-1">
        <div className=" ">
          <img src={logo} className="h-14 w-14 ml-24" alt="" />
          <h1 className="text-2xl  font-bold ">
            <span className="text-[#0066FF] text-center ml-14">Smart</span>{" "}
            <span className="text-red-500 text-center "> Sheba</span>
          </h1>
        </div>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          {user && (
            <button className="btn bg-[#0066FF] text-white text-xl">100</button>
          )}
        </div>
        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className=" w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={handleLogouts}>log out</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
