import { Outlet } from "react-router";
import NavBar from "../components/NavBar/NavBar";

const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <header className="md:mb-5">
        <NavBar></NavBar>
      </header>
      <main className="bg-linear-to-r from-sky-100 via-pink-100 to-violet-100">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
