import Logo from "../assets/logo-text.png";
const Nav = () => {
    return (
        <div>
            <nav className="max-w-[1300px] mx-auto px-4 pt-6">
                <div className=" flex items-center justify-between text-[#75808E] font-medium">
                    <img src={Logo} alt="" />
                    <ul className="flex gap-4 items-center ">
                        <li className="text-[#D91B7E]">Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <div className="flex gap-4">
                        <button>Sign In</button>
                        <button className="border border-[#D91B7E] px-5 py-2 rounded-4xl bg-[#D91B7E] text-white">Sign Up</button>
                        
                    </div>
                </div>
                
            </nav>
            <hr className="mt-6 border-gray-100" />
        </div>
        
    );
};

export default Nav;