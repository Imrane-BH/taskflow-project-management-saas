import {Check} from 'lucide-react';
import StatusCard from "../components/StatusCard"
export default function DashboardPage() {
    return(
        <div className='flex flex-col md:flex-row gap-5  justify-evenly w-full  md:min-h-screen' >
            <StatusCard title="completed" number={4} status="30% done" icon={<Check size={25} color="darkblue" />} />
            <StatusCard title="completed" number={4} status="30% done" icon={<Check size={25} color="darkblue" />} />
            <StatusCard title="completed" number={4} status="30% done" icon={<Check size={25} color="darkblue" />} />
        </div>
    )
}