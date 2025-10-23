import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { setUser, createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo_url.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, photo, email, password });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };
  return (
    <div className="py-6 md:py-12 flex flex-col items-center justify-center  px-4">
      {/* ---- Login Card ---- */}
      <div className="card bg-base-100 w-full max-w-md shadow-xl hover:shadow-2xl transition-all duration-300">
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
              className="btn btn-primary btn-outline mt-5 w-full"
            >
              Register Now
            </button>
          </fieldset>

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
