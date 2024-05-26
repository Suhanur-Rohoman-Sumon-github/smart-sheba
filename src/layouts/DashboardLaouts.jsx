import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/images (5) (1).jpeg";
import { adminNavData, navDatas } from "../data/data";
import useAdmin from "../hooks/useUser";
import Navbar from "../pages/shere/navbar/Navbar";

const DashboardLaouts = () => {
  const { isAdmin } = useAdmin();
  console.log(isAdmin.isAdmin);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* Page content here */}
        <Navbar />
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <Link to={"/"}>
          <ul className="menu p-4   min-h-full  text-base-content">
            <div className=" mb-4">
              <img src={logo} className="h-14 w-14 ml-24" alt="" />
              <h1 className="text-2xl  font-bold ">
                <span className="text-[#0066FF] text-center ml-14">Smart</span>{" "}
                <span className="text-red-500 text-center "> Sheba</span>
              </h1>
            </div>
            {/* Sidebar content here */}
            {isAdmin.isAdmin
              ? adminNavData.map((nav, index) => (
                  <li key={index}>
                    {" "}
                    {/* Adding a unique key prop */}
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
                          className="h-6 w-6 rounded-full "
                          alt=""
                        />
                      )}
                      {nav.element}
                    </NavLink>
                  </li>
                ))
              : navDatas.map((nav, index) => (
                  <li key={index}>
                    {" "}
                    {/* Adding a unique key prop */}
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
                          className="h-6 w-6 rounded-full "
                          alt=""
                        />
                      )}
                      {nav.element}
                    </NavLink>
                  </li>
                ))}
          </ul>
        </Link>
      </div>
    </div>
  );
};

export default DashboardLaouts;
