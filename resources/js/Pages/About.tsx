export default function About() {
    const skills = [
        "HTML", "CSS", "JavaScript", "TypeScript", "PHP", "Python", "C#",
        "Laravel", "ASP.NET", "Node.js", "React.js", "AngularJS", "jQuery",
        "Tailwind CSS", "SASS", "Docker", "AWS", "MySQL", "Git", "Bitbucket",
        "Jira", "Confluence", "WordPress", "LAMPP"
    ];

    return (
        <div className="h-svh flex flex-col items-centerjustify-center py-12">
            <div className="custom-container">
                <h2 className="text-3xl font-bold underline text-center mb-6">About Myself</h2>
                <p className="mb-4">
                    I studied Information Technology at London South Bank University, where I 
                    learned about developing websites using HTML, CSS, and PHP. 
                    Shortly afterwards I was hired by Sykes Cottages to join their team and
                    develop secure, scalable, and high-performing web pages in both PHP and
                    WordPress.
                </p>
                <p className="mb-4">
                    Having left Sykes, I am now available for any new contracts, standalone
                    projects, or even new roles as a software engineer.
                </p>
                <p className="mb-6">
                    If you're looking for a talented engineer to join your team or to work on
                    your web development projects, email or call me!
                </p>

                {/* Skills Section */}
                <div className="flex flex-wrap gap-3 justify-center">
                    {skills.map((skill, index) => (
                        <span 
                            key={index} 
                            className="bg-white text-gray-900 px-4 py-2 rounded-lg shadow-md text-sm font-medium"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
