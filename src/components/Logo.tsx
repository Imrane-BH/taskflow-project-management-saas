type LogoProps = {label: string};

export default function Logo({label} : LogoProps){
    return(
        <div className="text-blue-500 text-2xl font-bold">{label}</div>
    )
}