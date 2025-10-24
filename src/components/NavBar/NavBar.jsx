import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";
import PageLoader from "../PageLoader/PageLoader";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-sm md:text-base text-primary font-semibold underline"
              : "text-base-content text-sm md:text-base font-medium"
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
              : "text-base-content text-sm md:text-base font-font-medium"
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
              ? "text-sm md:text-base text-primary font-semibold underline"
              : "text-base-content text-sm md:text-base font-font-medium"
          }
        >
          My Profile
        </NavLink>
      </li>
    </>
  );

  const { user, signOutUser, loading, setLoading } = useContext(AuthContext);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Your logged out Successful! 🎉");
        setLoading(false);
      })
      .catch((err) => {
        const message = err.message;
        toast.error(`${message}`);
        setLoading(false);
      });
  };

  if (loading) return <PageLoader></PageLoader>;
  return (
    <div>
      <div className="navbar bg-linear-to-r from-indigo-200 via-purple-200 to-pink-200 rounded">
        {/* ------------------- Start -------------------- */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-4 w-40 p-2 shadow"
            >
              {links}
            </ul>
          </div>
        </div>

        {/* ------------------- Center --------------------- */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* ------------------- End ---------------------- */}
        <div className="navbar-end">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex flex-row items-center gap-1 md:gap-2">
              <p className="text-xs md:text-sm font-semibold">
                {user && user.displayName}
              </p>

              <div className="avatar avatar-online">
                <div className="w-7 md:w-11 rounded-full">
                  <img
                    src={`${
                      user
                        ? user.photoURL
                        : "https://i.ibb.co.com/3YyzRrk9/user.png"
                    }`}
                  />
                </div>
              </div>
            </div>

            {user ? (
              <button
                onClick={handleLogOut}
                className="btn btn-secondary btn-xs md:btn-md"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/auth/login"
                className="btn btn-primary btn-xs md:btn-md"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
