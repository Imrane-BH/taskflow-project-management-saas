
import { Menu, X } from 'lucide-react';

type NavProps = {
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Navbar({
    children,
    isOpen,
    setIsOpen
}: NavProps) {

    return (
        <nav className="flex justify-between items-center w-full px-3 fixed top-0 left-0 bg-white h-16 z-50 md:hidden">

            {children}

            <button
                onClick={() => setIsOpen(prev => !prev)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
            >
                {isOpen ? <X size={29} /> : <Menu size={29} />}
            </button>

        </nav>
    );
}
