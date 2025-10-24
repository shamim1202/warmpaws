import { useContext } from "react";
import toast from "react-hot-toast";

import { useLocation } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";

const ForgotPassword = () => {
  const location = useLocation();
  const { resetPassword } = useContext(AuthContext);
  const emailFromLogin = location.state?.email || "";

  const handleReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    resetPassword(email)
      .then(() => {
        toast.success("✅ Password reset email sent! Check your inbox.");
        setTimeout(() => {
          window.open("https://mail.google.com", "_blank");
        }, 1500);
      })
      .catch((err) => {
        toast.error(`❌ ${err.message}`);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-r from-sky-100 via-pink-100 to-violet-100 px-4">
      <div className="bg-linear-to-r from-sky-50 via-pink-50 to-violet-50 p-8 rounded-2xl w-full max-w-sm shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-300 overflow-hidden">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6">
          Reset Password
        </h2>

        <form onSubmit={handleReset}>
          <div className="mb-4">
            <label className="block text-sm font-medium md:font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              defaultValue={emailFromLogin}
              required
              placeholder="Enter your email"
              className="input input-bordered text-xs md:text-sm w-full"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-sm md:btn-md w-full"
          >
            Reset Password
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4 text-center">
          A password reset link will be sent to this email if it exists.
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
