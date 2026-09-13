import BannerStack from "../assets/banner-stack.png";
const Banner = () => {
    return (
        <div className="max-w-[1400px] mx-auto px-4 pt-6 flex flex-col md:flex-row items-center justify-between min-h-[550px] gap-10">
            <div>
                <h2 className="text-6xl font-bold">Build Your Ideal</h2>
                <h2 className="text-6xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-red-500 to-purple-900">Development Stack</h2>
                <p className="text-xl text-[#526078] leading-8 max-w-[650px] mt-6">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>
                <div className="flex gap-4 mt-8">
                    <button className="px-3 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-500">Explore Technologies</button>
                    <button className="px-9 py-2 rounded-lg outline outline-gray-200 text-[#526078] font-semibold">Learn More</button>
                </div>
            </div>
            <div className="w-[40%] flex justify-center">
                <img src={BannerStack} alt="Developmet Stack w-[420px]" />
            </div>
        </div>
    );
};

export default Banner;