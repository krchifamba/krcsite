import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

interface Socials {
    id: number;
    icon: any;
    href: string;
}
 
 export const socials: Socials[] = [
        {
            id: 1,
            icon: faLinkedin,
            href: "https://www.linkedin.com/in/krchifamba/",
        },
        {
            id: 2,
            icon: faGithub,
            href: "https://www.github.com/krchifamba",
        },
    ];