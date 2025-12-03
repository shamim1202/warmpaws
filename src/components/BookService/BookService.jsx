import toast from "react-hot-toast";

const BookService = () => {
  const handleBooking = (e) => {
    e.preventDefault();
    toast.success("✅ Service booked successfully!");
    e.target.reset();
  };

  return (
    <div>
      <div className="card w-full max-w-md shadow-xl hover:shadow-2xl transition-all duration-300">
        <form onSubmit={handleBooking} className="card-body">
          <h3 className="text-primary text-sm md:text-lg font-bold md:mt-4  text-center">
            Book Service
          </h3>
          <fieldset className="fieldset">
            <div>
              <label className="label text-sm md:text-lg">Name</label>
              <input
                type="name"
                name="name"
                className="input input-bordered w-full bg-transparent hover:shadow text-xs md:text-sm"
                placeholder="Your Name"
                required
              />

              <label className="label text-sm md:text-lg mt-3">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full bg-transparent hover:shadow text-xs md:text-sm"
                placeholder="Your Email"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-outline btn-sm md:btn-md mt-2 md:mt-5 w-full"
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
