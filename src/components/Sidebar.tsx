
import { NavLink } from 'react-router-dom';
import { navigationItems } from './navigation';

type SidebarProps = {
    isOpen: boolean;
};

export default function Sidebar({ isOpen }: SidebarProps) {

    return (
        <aside
            className={`
                flex flex-col gap-6
                fixed top-16 left-0 z-40
                bg-white w-full h-[calc(100vh-4rem)]
                justify-center text-center
                transition-all duration-300 ease-in-out
                ${isOpen
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-full opacity-0 pointer-events-none'
                }
                md:translate-x-0 md:opacity-100 md:pointer-events-auto
                md:top-0 md:w-1/4 md:h-screen md:justify-evenly
            `}
        >

            <div className="hidden md:block">
                <h1 className="text-2xl font-bold text-center">
                    TaskFlow
                </h1>
            </div>

            <ul className="flex flex-col gap-6">
                {navigationItems.map((item) => (
                    <li key={item.path}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                `block px-4 py-2 transition-colors ${
                                    isActive
                                        ? 'text-blue-600 font-bold bg-blue-50'
                                        : 'text-slate-600 hover:text-blue-600'
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <button className="mx-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                + New Task
            </button>

        </aside>
    );
}
