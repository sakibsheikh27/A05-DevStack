import { FaDocker, FaJava, FaNodeJs, FaReact, FaStar, FaVuejs } from "react-icons/fa";
import type { Itechnology } from "../type/technologyType";
import { RiNextjsFill, RiSvelteFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { BsTypescript } from "react-icons/bs";
import { useState } from "react";
import { toast } from "react-toastify";

interface TechnologyCardProps {
    technology: Itechnology;
    handleSelectedTechnologies: (technology: Itechnology) => void;
    selectedTechnologies: Itechnology[];
}


const TechnologyCard = ({technology, handleSelectedTechnologies, selectedTechnologies}: TechnologyCardProps) => {

    const icons = {
        react: <FaReact />,
        vueJs: <FaVuejs />,
        svelte: <RiSvelteFill />,
        nextJs: <RiNextjsFill />,
        nodeJs: <FaNodeJs />,
        postgreSQL: <BiLogoPostgresql />,
        redis: <DiRedis />,
        javaScript: <IoLogoJavascript />,
        typeScript: <BsTypescript />,
        java: <FaJava />,
        tailwind: <RiTailwindCssFill />,
        docker: <FaDocker />,
    };
const isSelected = selectedTechnologies.some(
    (item) => item.id === technology.id
);

    // const [isSelsected, setIsSelected] = useState(false);

    const handleAddToStock = () => {
        // setIsSelected(true);
        handleSelectedTechnologies(technology);
        toast.success(`${technology.name} is purchased successfully`);
        
    };

    

    return (
        <div>
            <div className={`px-4 py-4 rounded-lg ${isSelected === true ? 'border border-purple-400' : 'outline outline-gray-200'}`}>
                <div className="flex justify-between">
                    <span className="text-purple-500 text-3xl">{icons[technology.icon as keyof typeof icons]}</span>
                    <p className="text-while-500 bg-purple-300 border border-purple-300 rounded-4xl px-2">{technology.badge}</p>
                </div>
                <h2 className="my-3 font-bold text-xl">{technology.name}</h2>
                <p className="text-[#526078] mb-3">{technology.description}</p>
                <div>
                    
                    <span className="flex items-center justify-between gap-1">
                        <span className="bg-green-100 text-black-100 border border-green-100 rounded-4xl px-2 text-[12px]">{technology.category}</span>
                        <span className="text-[12px] text-[#526078]">{technology.level}</span>
                        <span className="flex items-center gap-1">
                            <span className="text-yellow-500 text-[10px]"><FaStar/></span>
                            <span className="text-[12px] font-bold">{technology.rating}</span>
                        </span>
                    </span>
                </div>
                <div className="flex justify-center">
                    <button 
                        onClick={handleAddToStock} 
                        className={`w-full border ${isSelected === true ? 'border-purple-400 bg-purple-400 cursor-not-allowed opacity-50' : 'border-pink-400 bg-pink-400 cursor-pointer'} rounded-4xl px-9 py-2 my-4 text-center font-medium`}
                        disabled = {isSelected}
                        >{isSelected === true ? 'Added to Stock' : 'Add to Stock'}</button>
                </div>
            </div>
            
        </div>
    );
};

export default TechnologyCard;