import { useState } from "react";
import Logo from "../assets/logo-text.png";
const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="sticky top-0 z-50 bg-white">
            <nav className="max-w-[1400px] mx-auto px-4 pt-6">
                <div className=" flex items-center justify-between text-[#75808E] font-medium">
                    <img src={Logo} alt="" />
                    <ul className="hidden md:flex gap-9 items-center">
                        <li className="text-[#D91B7E]">Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <div className="hidden md:flex gap-4">
                        <button className="cursor-pointer">Sign In</button>
                        <button className="border border-pink-400 px-5 py-2 rounded-4xl bg-pink-400 text-white cursor-pointer">Sign Up</button>
                        
                    </div>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-3xl"
                    >
                         ☰
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden mt-5 pb-4">
                        <ul className="flex flex-col gap-4">
                            <li className="text-[#D91B7E]">Home</li>
                            <li>Technologies</li>
                            <li>Projects</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                        <div>
                            <button className="cursor-pointer">Sign In</button>
                            <button className="border border-pink-400 px-3 py-1 rounded-4xl bg-pink-400 text-white">Sign Up</button>
                        </div>
                    </div>
                )}
            </nav>
            <hr className="mt-6 border-gray-100" />
        </div>
        
    );
};

export default Nav;