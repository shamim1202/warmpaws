import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-sm md:text-base text-primary font-semibold"
              : "text-base-content text-sm md:text-base font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-sm md:text-base text-primary font-semibold underline"
              : "text-base-content text-sm md:text-base font-semibold"
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "text-sm md:text-base text-primary font-semibold"
              : "text-base-content text-sm md:text-base font-semibold"
          }
        >
          My Profile
        </NavLink>
      </li>
    </>
  );

  const { user, signOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Your logged out Successful! 🎉");
      })
      .catch((err) => {
        const message = err.message;
        toast.error(`${message}`);
      });
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        {/* ------------------- Start -------------------- */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
        </div>

        {/* ------------------- Center --------------------- */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* ------------------- End ---------------------- */}
        <div className="navbar-end">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex flex-row items-center gap-2">
              <p className="font-medium">{user && user.displayName}</p>
              <img
                className="w-7 md:w-10"
                src="https://i.ibb.co.com/3YyzRrk9/user.png"
                alt=""
              />
            </div>
            {user ? (
              <button onClick={handleLogOut} className="btn btn-secondary">
                Logout
              </button>
            ) : (
              <Link  to="/auth/login" className="btn btn-sm md:btn-md btn-primary">Login</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
