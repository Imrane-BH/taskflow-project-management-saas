
import { Menu, X } from 'lucide-react';
import {useStore} from '../store/sidebarStore';
    type NavProps = {
    children: React.ReactNode;
};

export default function Navbar({
    children
}: NavProps) {
    const isOpen = useStore((state) => state.isOpen);
    const toggle = useStore((state) => state.toggle)
    return (
        <nav className="flex justify-between items-center w-full px-3 fixed top-0 left-0 bg-white h-16 z-50 md:hidden">

            {children}

            <button
                onClick={() => toggle()}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
            >
                {isOpen ? <X size={29} /> : <Menu size={29} />}
            </button>

        </nav>
    );
}
