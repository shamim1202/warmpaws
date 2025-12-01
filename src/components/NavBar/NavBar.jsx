import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";
import PageLoader from "../PageLoader/PageLoader";

const NavBar = () => {
  const { user, signOutUser, loading, setLoading } = useContext(AuthContext);

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
          to="/pets"
          className={({ isActive }) =>
            isActive
              ? "text-sm md:text-base text-primary font-semibold underline"
              : "text-base-content text-sm md:text-base font-font-medium"
          }
        >
          Pets
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive
              ? "text-sm md:text-base text-primary font-semibold underline"
              : "text-base-content text-sm md:text-base font-font-medium"
          }
        >
          About Us
        </NavLink>
      </li>
      {user && (
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
      )}
    </>
  );

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
    <div className="navbar bg-cyan-50 md:rounded">
      {/* ------------------- Start -------------------- */}
      <div className="navbar-start">
        {/* -------------- Logo ------------ */}
        <div className="py-1 md:py-2 hidden md:flex">
          <Link to="/" className="flex items-center justify-center gap-1">
            <h1 className="md:text-xl font-extrabold pb-1 md:pb-3">Warm</h1>
            <img
              className="w-8 md:w-10"
              src="https://i.ibb.co.com/LdGhbNSk/logo.png"
              alt=""
            />
            <h1 className="md:text-xl font-extrabold pt-1 md:pt-3">Paws</h1>
          </Link>
        </div>

        <div className="dropdown relative">
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
            className="menu menu-sm dropdown-content bg-linear-to-r from-sky-100 via-pink-100 to-violet-100 rounded-box z-50 mt-5 ml-2 w-40 p-2 shadow"
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

            <div className="avatar">
              <div className="w-7 md:w-11 rounded-full">
                <img
                  src={`${
                    user
                      ? user.photoURL
                      : "https://i.ibb.co.com/3YyzRrk9/user.png"
                  }`}
                  referrerPolicy="no-referrer"
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
            <Link to="/auth/login" className="btn btn-primary btn-xs md:btn-md">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
