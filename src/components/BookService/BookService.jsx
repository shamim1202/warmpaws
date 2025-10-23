import toast from "react-hot-toast";

const BookService = () => {
  const handleBooking = (e) => {
    e.preventDefault();
    toast.success("✅ Service booked successfully!");
    e.target.reset()
  };

  return (
    <div>
      <div className="card w-full max-w-md shadow-xl hover:shadow-2xl transition-all duration-300">
        {/* {loading && <PageLoader message="Logging you in..." type="dots" />} */}
        {/* ---- Title ---- */}
        <h3 className="text-blue-600 text-sm md:text-lg font-bold mt-4  text-center">
          Book Service
        </h3>

        <form onSubmit={handleBooking} className="card-body">
          <fieldset className="fieldset">
            <div>
              <label className="label text-sm md:text-lg">Name</label>
              <input
                type="name"
                name="name"
                className="input input-bordered w-full bg-transparent hover:shadow"
                placeholder="Your Name"
              />

              <label className="label text-sm md:text-lg mt-3">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full bg-transparent hover:shadow"
                placeholder="Your Email"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-outline mt-5 w-full"
            >
              Book Now
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default BookService;
