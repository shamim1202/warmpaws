import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router";
import PageLoader from "../../components/PageLoader/PageLoader";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signInUser, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });

    signInUser(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        toast.success(`Welcome back, ${user.displayName || "User"} 👋`);
        setLoading(false);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        const code = err.code;
        toast.error(`${code}, Login failed! Please try again.`);
        setLoading(false);
      });
  };
  return (
    <div className="py-6 md:py-12 flex flex-col items-center justify-center  px-4">
      {/* ---- Login Card ---- */}
      <div className="card bg-base-100 w-full max-w-md shadow-xl hover:shadow-2xl transition-all duration-300">
        {loading && <PageLoader message="Logging you in..." type="dots" />}
        {/* ---- Title ---- */}
        <h1 className="text-lg md:text-2xl font-bold mt-4 md:mt-6 text-center">
          Welcome Back 👋 <br />
          <span className="text-blue-600 text-sm md:text-lg">
            Login to Your Account
          </span>
        </h1>

        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label text-sm md:text-lg">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              placeholder="Email"
            />

            <label className="label text-sm md:text-lg mt-3">Password</label>
            <input
              type="password"
              name="password"
              className="input input-bordered w-full"
              placeholder="Password"
            />

            <div className="text-right mt-2">
              <a className="link link-hover text-sm md:text-base text-blue-600">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-outline mt-5 w-full"
            >
              Login
            </button>
          </fieldset>

          <div className="divider">OR</div>
          {/* --------- Google ---------- */}
          <button className="btn bg-white text-black border border-[#dfdfdf] hover:shadow transition-all duration-300">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>

          {/* -------- Register Navigation -------- */}
          <p className="text-center text-sm md:text-base text-gray-600 mt-2 md:mt-4">
            Don’t have an account?{" "}
            <Link
              to="/auth/register"
              className="text-blue-600 hover:text-red-500 font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
