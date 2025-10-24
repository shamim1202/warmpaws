import { Outlet } from "react-router";

import { useContext } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import PageLoader from "../components/PageLoader/PageLoader";
import { AuthContext } from "../providers/AuthProvider";

const HomeLayout = () => {
  const { loading } = useContext(AuthContext);

  if (loading) return <PageLoader />;

  return (
    <div className="max-w-7xl mx-auto">
      <header>
        <Header></Header>
        <NavBar></NavBar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
