import { FaDocker, FaJava, FaNodeJs, FaReact, FaVuejs } from "react-icons/fa";
import { RiNextjsFill, RiSvelteFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { BsTypescript } from "react-icons/bs";
import type { Itechnology } from "../type/technologyType";
import { MdDelete } from "react-icons/md";
import type { Dispatch, SetStateAction } from "react";
interface SelectedCardProps {
    selectedTechnologies: Itechnology[];
    setselectedTechnologies: Dispatch<SetStateAction<Itechnology[]>>;
}

const SelectedCard = ({ selectedTechnologies, setselectedTechnologies }: SelectedCardProps) => {

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

    const handleDeleteTechnology = (technology: Itechnology) => {
        const restTechnology = selectedTechnologies.filter(
            (selectedTechnology) => selectedTechnology.id !== technology.id,
        );
        setselectedTechnologies(restTechnology);
    }

    const handleRemoveAll = () => {
    setselectedTechnologies([]);
};

    return (
        <div className="w-full px-4 py-4 rounded-lg outline outline-gray-200">
            <h2 className="font-medium text-xl">Your Stack</h2>
            <p>{selectedTechnologies.length} Technology Selected</p>

            {selectedTechnologies.length === 0 ? (
                <>
                    <p className="text-[14px] text-[#526078]">
                        No technologies selected yet.
                    </p>

                    <p className="w-full p-2 mt-3 rounded-lg outline outline-gray-200 text-sm text-[#526078] font-semibold">
                        Your stack is empty
                    </p>
                </>
            ) : (
                selectedTechnologies.map((technology) => (
                    <div
                        key={technology.id}
                        className="flex items-center gap-3 p-3 rounded-lg outline outline-gray-200">
                        <div className="text-purple-500 text-2xl">
                            {icons[technology.icon as keyof typeof icons]}
                        </div>

                        <div>
                            <h3 className="font-semibold">
                                {technology.name}
                            </h3>

                            <span className="text-xs text-[#526078]">
                                {technology.category}
                            </span>
                        </div>
                        <button onClick={() => handleDeleteTechnology(technology)} className="ml-auto text-red-500 cursor-pointer text-xl">
                            <MdDelete />
                        </button>
                        
                    </div>
                ))
            )}

            <div className="flex justify-center mt-6">
                <button onClick={handleRemoveAll} className="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer">Remove All</button>
            </div>
        </div>
    );
};

export default SelectedCard;