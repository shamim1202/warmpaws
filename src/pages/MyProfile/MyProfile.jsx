import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";
import NavBar from "../../components/NavBar/NavBar";
import PageLoader from "../../components/PageLoader/PageLoader";
import { AuthContext } from "../../providers/AuthProvider";

const MyProfile = () => {
  const { user, setUser, updateUser, loading, setLoading } =
    useContext(AuthContext);
      const navigate = useNavigate();
      const location = useLocation();

  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    photoURL: user?.photoURL || "",
  });

  // 👉 Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 👉 handle profile update
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setLoading(true);

    updateUser(user, {
      displayName: formData.displayName,
      photoURL: formData.photoURL,
    })
      .then(() => {
        setUser({
          ...user,
          displayName: formData.displayName,
          photoURL: formData.photoURL,
        });
        toast.success("✅ Profile updated successfully!");
        setLoading(false);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch(() => {
        toast.error("❌ Failed to update profile. Try again!");
        setLoading(false);
      });
  };

  if (loading) return <PageLoader></PageLoader>;

  return (
    <div className="max-w-7xl mx-auto">
      <NavBar></NavBar>
      <div className="mt-2 md:mt-8 py-10 px-4 flex flex-col items-center justify-center min-h-[80vh] bg-linear-to-r from-indigo-200 via-purple-200 to-pink-200 rounded">
        <div className="card w-full max-w-md shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="card-body items-center text-center">
            {/* ---- Profile Image ---- */}
            <div className="avatar avatar-online">
              <div className="w-24 rounded-full ring-2 ring-success ring-offset-base-100 ring-offset-2">
                <img
                  src={
                    user?.photoURL ||
                    "https://cdn-icons-png.flaticon.com/512/847/847969.png"
                  }
                  alt="User Avatar"
                />
              </div>
            </div>

            {/* ---- Info ---- */}
            <h2 className="text-xl font-semibold mt-3">
              {user?.displayName || "No Name"}
            </h2>
            <p className="text-gray-500">{user?.email}</p>

            {/* ---- Update Form ---- */}
            <form
              onSubmit={handleUpdateProfile}
              className="w-full mt-6 text-left"
            >
              <fieldset className="fieldset">
                <label className="label text-sm">Name</label>
                <input
                  type="text"
                  name="displayName"
                  value={formData.displayName}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="Enter your name"
                  required
                />

                <label className="label text-sm mt-3">Photo URL</label>
                <input
                  type="text"
                  name="photoURL"
                  value={formData.photoURL}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="Enter photo URL"
                  required
                />

                <button
                  type="submit"
                  className="btn btn-primary btn-outline btn-sm md:btn-md mt-2 md:mt-5 w-full"
                >
                  Update Profile
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
