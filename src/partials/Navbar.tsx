import { useState } from "react";



function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <div className="hidden md:flex justify-center">
                <nav className={" fixed  w-navbar z-10 top-3 bg-gray-500 p-4 bg-opacity-20 flex justify-between items-center border "} >
                    <div className={"text-white text-2xl font-semibold"} >
                        RAWBELL
                    </div>
                    <div className={"flex space-x-4 text-white"} >
                        <a href="" className={"hover:text-gray-300"} >Services</a>
                        <a href="" className={"hover:text-gray-300"} >Work</a>
                        <a href="" className={"hover:text-gray-300"} >About</a>
                        <a href="" className={"hover:text-gray-300"} >Blog</a>
                    </div>
                    <button className={"bg-amber-400 text-gray-900 font-semibold py-2 px-6  hover:bg-amber-500"} >Let's Talk</button>
                </nav>
            </div>
            <nav className="bg-gray-900 md:hidden w-full p-4 flex justify-between items-center">
                <div className="text-white text-2xl font-semibold">Logo</div>
                <button className="text-white md:hidden" onClick={toggleMenu}>
                    <svg className="h-6 7hw-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>

                {/* Menu (Hidden by default on mobile) */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-8 mt-4 md:mt-0`}>
                    <a href="#" className="block text-white hover:text-gray-300 py-2">Services</a>
                    <a href="#" className="block text-white hover:text-gray-300 py-2">Work</a>
                    <a href="#" className="block text-white hover:text-gray-300 py-2">About</a>
                    <a href="#" className="block text-white hover:text-gray-300 py-2">Blog</a>
                </div>
            </nav>
        </>
    );
}

export default Navbar;