import FooterLogo from "../assets/logo-text.png"
const Footer = () => {
    return (
        <div>
            <hr className="my-[40px] border-gray-100" />
            <div className="max-w-[1400px] mx-auto px-4 pt-6">
                <div className="flex flex-col gap-8 md:flex-row md:justify-between list-none">
                    <div>
                        <img src={FooterLogo} alt="Foother Logo" />
                        <p className="tex-[12px] text-[#526078] max-w-[350px] mt-2">Curated tools, technologies, and resources for developers building
                            modern software.</p>
                    </div>
                    <div>
                        <h2 className="font-bold text-black-500">PRODUCT</h2>
                        <li className="tex-[12px] text-[#526078]">Home</li>
                        <li className="tex-[12px] text-[#526078]">Technologies</li>
                        <li className="tex-[12px] text-[#526078]">Projects</li>
                    </div>
                    <div>
                        <h2 className="font-bold text-black-500">COMPANY</h2>
                        <li className="tex-[12px] text-[#526078]">About</li>
                        <li className="tex-[12px] text-[#526078]">Contact</li>
                        <li className="tex-[12px] text-[#526078]">Careers</li>
                    </div>
                    <div>
                        <h2 className="font-bold">LEGAL</h2>
                        <li className="tex-[12px] text-[#526078]">Privacy Policy</li>
                        <li className="tex-[12px] text-[#526078]">Terms of Service</li>
                    </div>
                </div>
                <div className="flex gap-4">
                    <span><a href="https://github.com/sakibsheikh27" target="blank">GitHub</a></span>
                    <span><a href="https://www.linkedin.com/feed/" target="blank">Twitter</a></span>
                    <span><a href="https://x.com/sakibsheikh27" target="blank">LinkedIn</a></span>
                </div>
                <hr className="my-[40px] border-gray-100" />
                <div className="flex flex-col md:flex-row md:justify-between mb-9">
                    <p className="tex-[5px] text-[#526078]">&copy;2026.Dev Stack. All rights reserved </p>
                    <div>
                        <span className="tex-[5px] text-[#526078] mx-3">Privacy</span>
                        <span className="tex-[5px] text-[#526078]">Terms</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;