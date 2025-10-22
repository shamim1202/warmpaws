import { Link } from "react-router";

const Header = () => {
  return (
    <div className="py-1 md:py-2">
      <Link to="/" className="flex items-center justify-center gap-1">
        <h1 className="text-xl md:text-2xl font-bold md:font-extrabold pb-1 md:pb-2">
          Warm
        </h1>
        <img
          className="w-8 md:w-10"
          src="https://i.ibb.co.com/LdGhbNSk/logo.png"
          alt=""
        />
        <h1 className="text-xl md:text-2xl font-bold md:font-extrabold pt-1 md:pt-2">
          Paws
        </h1>
      </Link>
    </div>
  );
};

export default Header;
