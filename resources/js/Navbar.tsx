import { Link } from "@inertiajs/react";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }
  

export default function Navbar() {
    return(<>
            <div className='px-4 py-4 flex justify-between '>
                <div> <Link className='' href='/'>Home</Link></div>
                <div className='w-1/4 flex justify-around'>
                    <Link href="/about">About</Link>
                    <Link href="/portfolio">Portfolio</Link>
                    <Link href="/contact">Contact Me</Link>
                    <Link href='/learn'>Learn</Link>
                </div>
            </div>

            
        </>);
}