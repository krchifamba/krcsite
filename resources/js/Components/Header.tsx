import { Link } from "@inertiajs/react";

export default function Header({ name }: { name: string }) {
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // Prevent default jump behavior
        const target = document.getElementById("portfolio");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="min-h-screen flex flex-col text-center justify-center">
            <div className="mx-auto px-6 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
                <div className="flex flex-col items-center max-w-md mx-auto space-y-4">
                    <h2 className="text-3xl font-bold underline">Hello, I'm {name}</h2>
                    <h3 className="text-2xl font-bold">a Full Stack Web Developer!</h3>
                    <p>With 3 years of professional experience in Laravel, C#, and WordPress, I can build your stylish and responsive web applications.</p>
                    
                    {/* Smooth scroll button */}
                    <a
                        className="w-full max-w-xs px-6 py-4 bg-white text-black text-xl font-bold rounded-lg shadow-lg hover:bg-gray-200 cursor-pointer"
                        // href="#portfolio"
                        onClick={handleSmoothScroll}
                    >
                        Portfolio
                    </a>
                </div>
            </div>
        </header>
    );
}
