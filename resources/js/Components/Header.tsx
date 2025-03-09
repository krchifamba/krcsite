import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "./Socials";
import FadeIn from "./Framer";


export default function Header({ name }: { name: string }) {
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // Prevent default jump behavior
        const target = document.getElementById("portfolio");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="min-h-screen flex justify-center items-center text-center">
            <div className="w-full px-6 max-w-md space-y-4">
                <FadeIn>
                <h2 className="text-3xl font-bold underline">Hello, I'm {name}</h2>
                <h3 className="text-2xl font-bold">A Full Stack Web Developer!</h3>
                <p>
                    With 3 years of professional experience in Laravel, C#, and WordPress, I can build
                    your stylish and responsive web applications.
                </p>
                </FadeIn>
                
                {/* Socials */}
                <FadeIn>
                <div className="flex justify-center space-x-4">
                {socials.map((social) => (
                    <a
                        key={social.id}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-2xl hover:text-blue-500 transition-all duration-300 ease-in-out"
                    >
                        <FontAwesomeIcon icon={social.icon} size="2x"/>
                    </a>
                    ))}
                </div>
                </FadeIn>
            </div>
        </header>
    );
}
