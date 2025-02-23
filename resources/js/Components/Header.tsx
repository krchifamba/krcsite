export default function Header({name}:{name:string}) {
    return (<>
            <header className="min-h-screen flex flex-col text-center justify-center">
                <span className="flex flex-col">
                    <h1 className="text-3xl font-bold underline" >Hello, I'm {name}</h1>
                    <h2 className="text-2xl font-bold">a Full Stack Web Developer!</h2>
                    <p>With experience in Laravel, PHP, and WordPress, I can build clean and stylish web applicants.</p>
                </span>
            </header>
        </>)
}