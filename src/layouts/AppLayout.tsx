import { Outlet } from 'react-router-dom';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function AppLayout() {

    return (
        <div className="min-h-screen">

            {/* Mobile Navbar */}
            <Navbar>
                <Logo label="TaskFlow" />
            </Navbar>

            <div className="flex min-h-screen">

                {/* Sidebar */}
                <Sidebar/>

                {/* Main Content */}
                <main className="mt-16 md:mt-0 w-full md:ml-[25%] md:w-3/4 p-4 min-h-screen transition-all duration-200">
                    <Outlet />
                </main>

            </div>
        </div>
    );
}
