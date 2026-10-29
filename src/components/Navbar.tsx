import {useState} from 'react';
import {Menu, X} from 'lucide-react';
type NavProps = {children : React.ReactNode};

export default function Navbar({children} : NavProps){
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return(
        <>
            <nav className="flex justify-between w-full px-3 mt-1 md:hidden fixed top-0 bg-white h-15  " >
           {children}
           <button onClick={() => setIsOpen(prev => !prev)}>
                {isOpen ? <X size={29} />   : <Menu size={29} /> }
           </button>
        </nav>
         <ul className={`flex flex-col gap-3 fixed bg-white w-full justify-center text-center transition-all duration-300 ease-in-out ${isOpen  ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} md:flex  md:w-1/4 md:min-h-screen md:justify-evenly md:gap-6  `}>
                <li>Dashboard</li>
                <li>My tasks</li>
                <li>Team tasks</li>
                <li>Calender</li>
                <button>+ New Task</button>
            </ul> 
        </>
    );
}