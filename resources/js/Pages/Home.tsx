import { Head, Link, usePage } from "@inertiajs/react";

export default function Home({name}:{name:string}) {
    return (<>
    <Head title="Kudzai Chifamba" />
        <header className="h-80 flex flex-col text-center justify-center">
            <h1 className="text-3xl font-bold underline" >Hello, I'm {name}</h1>
            <h2 className="text-2xl font-bold"> a Full Stack Web Developer!</h2>
        </header>
    </>);
}