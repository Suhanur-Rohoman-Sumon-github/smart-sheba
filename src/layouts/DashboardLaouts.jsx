import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/Picsart_24-05-27_18-34-27-178.png";
import { adminNavData, navDatas } from "../data/data";
import useAdmin from "../hooks/useUser";
import Navbar from "../pages/shere/navbar/Navbar";
import { FaBars } from "react-icons/fa";

const DashboardLaouts = () => {
  const { isAdmin } = useAdmin();
  console.log(isAdmin.isAdmin);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar with drawer toggle button */}
        <div className="flex justify-between items-center p-4 lg:hidden">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button"
          >
            <FaBars />
          </label>
          <Navbar />
        </div>
        {/* Navbar for larger screens */}
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="bg-slate-50 h-full flex flex-col z-10">
          <Link to={"/"}>
            <div className="md:p-4">
              <img src={logo} className="h-24 md:w-72 w-64  " alt="" />
            </div>
          </Link>
          <div className="flex-grow overflow-y-auto">
            <ul className="menu  pt-0 text-base-content">
              {/* Sidebar content */}
              {isAdmin.isAdmin
                ? adminNavData.map((nav, index) => (
                    <li key={index}>
                      <NavLink
                        exact
                        className={({ isActive }) =>
                          isActive
                            ? "bg-[#0069ff] text-white"
                            : "text-[15px] my-2 hover:text-[#0066FF]"
                        }
                        to={nav.path}
                      >
                        {nav?.icon ? (
                          nav?.icon
                        ) : (
                          <img
                            src={nav?.img}
                            className="h-6 w-6 rounded-full"
                            alt=""
                          />
                        )}
                        {nav.element}
                      </NavLink>
                    </li>
                  ))
                : navDatas.map((nav, index) => (
                    <li key={index}>
                      <NavLink
                        exact
                        className={({ isActive }) =>
                          isActive
                            ? "bg-[#0069ff] text-white"
                            : "text-[15px] my-2 hover:text-[#0066FF]"
                        }
                        to={nav.path}
                      >
                        {nav?.icon ? (
                          nav?.icon
                        ) : (
                          <img
                            src={nav?.img}
                            className="h-6 w-6 rounded-full"
                            alt=""
                          />
                        )}
                        {nav.element}
                      </NavLink>
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLaouts;
