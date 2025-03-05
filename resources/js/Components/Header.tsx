import { Link } from "@inertiajs/react";

export default function Header({ name }: { name: string }) {
    return (
        <header className="min-h-screen flex flex-col text-center justify-center">
            <div className="mx-auto px-6 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
                <div className="flex flex-col items-center max-w-md mx-auto space-y-4">
                    <h2 className="text-3xl font-bold underline">Hello, I'm {name}</h2>
                    <h3 className="text-2xl font-bold">a Full Stack Web Developer!</h3>
                    <p>With 3 years of professional experience in Laravel, C#, and WordPress, I can build your stylish and responsive web applications.</p>
                    
                    {/* Button button, who's got the button*/}
                    <Link
                        className="w-full max-w-xs px-6 py-4 bg-white text-black text-xl font-bold rounded-lg shadow-lg hover:bg-gray-200"
                        href="#portfolio"
                    >
                        Portfolio
                    </Link>
                </div>
            </div>
        </header>
    );
}
