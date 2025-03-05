import { Link } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false)
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }

    return (
        <>
            <div className='px-4 py-4 flex justify-between'>
                <div>
                    <Link className='' to='#/'>Home</Link>
                </div>
                <div className='w-1/4 flex justify-around'>
                    <Link to="#about">About</Link>
                    <Link to="#portfolio">Portfolio</Link>
                    <Link to="#contact">Contact Me</Link>
                </div>
            </div>
        </>
    );
}
