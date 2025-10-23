
const PageLoader = ({ message = "loading...", type = "dots" }) => {
  // Choose loader style dynamically
  const loaderType =
    {
      spinner: "loading-spinner",
      ring: "loading-ring",
      dots: "loading-dots",
      ball: "loading-ball",
      bars: "loading-bars",
    }[type] || "loading-spinner";

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-linear-to-r from-indigo-300 via-purple-300 to-pink-300 backdrop-blur-sm z-50 animate__animated animate__fadeIn">
      {/* Loader animation */}
      <div
        className={`loading ${loaderType} loading-lg text-blue-400 mb-4 animate__animated animate__rotateIn`}
      ></div>

      {/* Message */}
      <p className="text-white text-lg font-medium animate__animated animate__pulse animate__infinite">
        {message}
      </p>
    </div>
  );
};

export default PageLoader;
