type CardProps = {
    title: string;
    number: number;
    status?: string;
    icon: React.ReactElement;
}

export default function StatusCard({title,number,status,icon}: CardProps) {
    return(
        <section className="flex  m-3 bg-blue-300 p-2 w-[350px] mx-auto " >
            <div>
                <h3>{title}</h3>
                <p>{number}</p>
                <p>{status}</p>
            </div>
            <div>
                {icon}
            </div>
        </section>
       )
}