import { Outlet } from 'react-router';

import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const HomeLayout = () => {
    return (
        <div>
            <header className='max-w-7xl mx-auto'>
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