
const BookService = () => {
  return (
    <div>
      <div className="card bg-base-100 w-full max-w-md shadow-xl hover:shadow-2xl transition-all duration-300">
        {/* {loading && <PageLoader message="Logging you in..." type="dots" />} */}
        {/* ---- Title ---- */}
        <h3 className="text-blue-600 text-sm md:text-lg font-bold mt-4 md:mt-6 text-center">
            Book Service
        </h3>

        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label text-sm md:text-lg">Name</label>
            <input
              type="name"
              name="name"
              className="input input-bordered w-full"
              placeholder="Your Name"
            />

            <label className="label text-sm md:text-lg mt-3">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              placeholder="Your Email"
            />

            <button
              type="submit"
              className="btn btn-primary btn-outline mt-5 w-full"
            >
              Login
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default BookService;
