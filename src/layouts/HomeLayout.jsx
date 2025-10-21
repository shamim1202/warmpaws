import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';

const HomeLayout = () => {
    return (
        <div>
            <header className='max-w-7xl mx-auto'>
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