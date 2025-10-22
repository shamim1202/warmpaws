import { Link } from "react-router";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("clicked");
  };
  return (
    <div className="md:min-h-screen py-10 md:py-0 flex flex-col items-center justify-center bg-base-200 px-4">
      {/* ---- Login Card ---- */}
      <div className="card bg-base-100 w-full max-w-sm shadow-xl hover:shadow-2xl transition-all duration-300">
        {/* ---- Title ---- */}
        <h1 className="text-lg md:text-2xl font-bold mt-4 md:mt-6 text-center">
          Welcome Back 👋 <br />
          <span className="text-blue-600">Login to Your Account</span>
        </h1>

        <form className="card-body">
          <fieldset className="fieldset">
            <label className="label text-sm md:text-lg">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered"
              placeholder="Email"
            />

            <label className="label text-sm md:text-lg mt-3">Password</label>
            <input
              type="password"
              name="password"
              className="input input-bordered"
              placeholder="Password"
            />

            <div className="text-right mt-2">
              <a className="link link-hover text-sm md:text-base text-blue-600">
                Forgot password?
              </a>
            </div>

            <button
              onSubmit={handleLogin}
              className="btn btn-primary btn-outline mt-5 w-full"
            >
              Login
            </button>
          </fieldset>

          {/* ---- Register Navigation ---- */}
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
