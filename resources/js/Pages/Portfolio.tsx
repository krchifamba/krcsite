import { Link } from "@inertiajs/react";

export default function Portfolio() {
    interface Project {
        id: number;
        title: string;
        description: string;
        image: string;
        href: string;
    }

    const projects: Project[] = [
        {
            id: 1,
            title: "Kuda-Kwashe Website",
            description: "Website made for my brother, (a singer/songwriter) using WordPress and Elementor.",
            image: "https://res.cloudinary.com/difrudood/image/upload/v1740869140/frbuv6okb653mvsjjeil.png",
            href: "#",
        },
    ];

    return (
        <div className="min-h-screen min-w-screen bg-white text-black flex flex-col justify-center items-center">
            <div className="custom-container">
                <h2 className="text-center text-3xl font-bold mb-8">Portfolio</h2>
                <div className="flex flex-col md:flex-row items-center">
                    {projects.map((project) => (
                        <a
                            href={project.href}
                            key={project.id}
                            className="flex items-center flex-col md:flex-row w-full bg-white p-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 ease-in-out"
                        >
                            <div className="md:w-1/2 p-4">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                            <div className="md:w-1/2 p-4">
                                <h2 className="text-2xl font-bold mb-4 text-center md:text-left">{project.title}</h2>
                                <p>{project.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
