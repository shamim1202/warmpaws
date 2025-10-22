import { Outlet } from 'react-router';
import NavBar from '../components/NavBar/NavBar';

const AuthLayout = () => {
    return (
        <div>
            <header className="max-w-7xl mx-auto">
                <NavBar></NavBar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;