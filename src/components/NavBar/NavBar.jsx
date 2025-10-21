import { Link, NavLink } from "react-router";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-sm md:text-base text-primary font-semibold" : "text-base-content text-sm md:text-base font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "text-sm md:text-base text-primary font-semibold underline" : "text-base-content text-sm md:text-base font-semibold"
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "text-sm md:text-base text-primary font-semibold" : "text-base-content text-sm md:text-base font-semibold"
          }
        >
          My Profile
        </NavLink>
      </li>
    </>
  );

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

          {/* ------ Logo with title ------- */}
          <div>
            <Link to="/" className="flex items-center justify-center gap-1">
              <h1 className="text-xl md:text-2xl font-bold md:font-extrabold pb-1 md:pb-3">
                Warm
              </h1>
              <img
                className="w-8 md:w-10"
                src="https://i.ibb.co.com/LdGhbNSk/logo.png"
                alt=""
              />
              <h1 className="text-xl md:text-2xl font-bold md:font-extrabold pt-1 md:pt-3">
                Paws
              </h1>
            </Link>
          </div>
        </div>

        {/* ------------------- Center --------------------- */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* ------------------- End ---------------------- */}
        <div className="navbar-end">
          <div className="flex items-center md:gap-3">
            <div>
                <img src="" alt="" srcset="" />
                <h3>User</h3>
            </div>
            <Link to="/auth/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
