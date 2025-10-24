import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router";
import PageLoader from "../../components/PageLoader/PageLoader";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { setUser, createUser, updateUser, loading, setLoading, googleSignIn } =
    useContext(AuthContext);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo_url.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, photo, email, password });

    if (name.length < 4) {
      setNameError("Name must contain at least 4 characters longer.");
      setLoading(false);
      return;
    }

    if (
      password.length < 6 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password)
    ) {
      setPasswordError(
        "Password must contain at least 6 characters, one uppercase, and one lowercase letter."
      );
      setLoading(false);
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success(`Welcome, ${name}! 🎉`);
            setLoading(false);
            form.reset();
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      })
      .catch((error) => {
        const code = error.code;
        toast.error(`${code} Registration failed! Please try again.`);
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success(`Welcome back, ${user.displayName || "Guest!"} 👋`);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .then((err) => {
        const message = err.message;
        toast.error(`${message}, Login failed! Please try again.`);
      });
  };

  return (
    <div className="py-6 md:py-12 flex flex-col items-center justify-center  px-4">
      {/* ---- Login Card ---- */}
      <div className="card w-full max-w-md shadow-xl hover:shadow-2xl transition-all duration-300">
        {loading && <PageLoader message="Logging you in..." type="dots" />}
        {/* ---- Title ---- */}
        <h1 className="text-lg md:text-2xl font-bold mt-4 md:mt-6 text-center">
          Welcome 👋 <br />
          <span className="text-blue-600 text-sm md:text-lg">
            Create Your Account
          </span>
        </h1>

        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* --------> Name <---------- */}
            <label className="label text-sm md:text-lg">Name</label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full"
              placeholder="Your Name"
              required
            />
            {/* ---------- Name error ---------- */}
            {nameError && (
              <p className="text-red-500 text-xs md:text-sm mt-1 animate__animated animate__fadeIn">
                {nameError}
              </p>
            )}

            {/* --------> Photo Url <---------- */}
            <label className="label text-sm md:text-lg">Photo Url</label>
            <input
              type="text"
              name="photo_url"
              className="input input-bordered w-full"
              placeholder="Photo Url"
              required
            />

            {/* --------> Email <---------- */}
            <label className="label text-sm md:text-lg">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              placeholder="Email"
              required
            />

            {/* --------> Password <---------- */}
            <label className="label text-sm md:text-lg mt-3">Password</label>
            <input
              type="password"
              name="password"
              className="input input-bordered w-full"
              placeholder="Password"
              required
            />
            {/* ---------- password error ---------- */}
            {passwordError && (
              <p className="text-red-500 text-xs md:text-sm mt-1 animate__animated animate__fadeIn">
                {passwordError}
              </p>
            )}

            {/* ---- Gender Selection ---- */}
            <div className="mt-2 md:mt-4">
              <label className="label text-sm md:text-base font-medium mb-2">
                Gender
              </label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    className="radio bg-blue-100 border-blue-300 checked:bg-blue-200 checked:text-blue-600 checked:border-blue-600"
                    value="male"
                  />
                  <span className="text-xs md:text-sm">Male</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    className="radio bg-pink-100 border-pink-300 checked:bg-pink-200 checked:text-pink-600 checked:border-pink-600"
                    value="female"
                  />
                  <span className="text-xs md:text-sm">Female</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    className="radio bg-yellow-100 border-yellow-300 checked:bg-yellow-200 checked:text-yellow-600 checked:border-yellow-600"
                    value="other"
                  />
                  <span className="text-xs md:text-sm">Other</span>
                </label>
              </div>
            </div>

            {/* ---- Terms & Conditions ---- */}
            <div className="mt-2 md:mt-4">
              <label className="flex items-start gap-2 text-xs md:text-sm">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs md:checkbox-sm"
                  required
                />
                <span className="md:pt-0.5">
                  I agree to the{" "}
                  <a className="text-blue-600 hover:underline cursor-pointer">
                    Terms & Conditions
                  </a>
                </span>
              </label>
            </div>

            <button
              type="submit"
              className={`btn btn-primary btn-outline mt-5 w-full ${
                loading
                  ? "animate__animated animate__pulse animate__infinite"
                  : ""
              }`}
              disabled={loading}
            >
              {loading ? "Registering..." : "Register Now"}
            </button>
          </fieldset>

          <div className="divider">OR</div>

          {/* --------- Google ---------- */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn bg-white text-black border border-[#dfdfdf] hover:shadow transition-all duration-300"
          >
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

          {/* ---- Register Navigation ---- */}
          <p className="text-center text-sm md:text-base text-gray-600 mt-2 md:mt-4">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-blue-600 hover:text-red-500 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
