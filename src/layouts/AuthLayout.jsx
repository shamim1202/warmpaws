import { Outlet } from 'react-router';
import NavBar from '../components/NavBar/NavBar';

const AuthLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <header>
                <NavBar></NavBar>
            </header>
            <main className="bg-linear-to-r from-indigo-200 via-purple-200 to-pink-200 rounded">
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;