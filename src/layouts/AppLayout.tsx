import { Outlet, NavLink } from 'react-router-dom';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';

export default function AppLayout(){
    return(
        <div className='min-h-screen mt-2'>
            <header>
                <Logo label="Taskflow"/>
                <Navbar>
                    <Logo label="Taskflow"/>
                </Navbar> 
            </header>
               <div className="flex">
                 <aside className=' md:w-1/4'>
                   
                 </aside>   
                <main className='mt-4 w-full md:w-3/4 p-4 min-h[calc(100vh-4rem)] transition-all duration-200 bg-red-200 min-h-100'>
                 <Outlet/>
                 </main>
               </div>
        </div>
    );
}