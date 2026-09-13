import { use, useState } from "react";
import type { Itechnology } from "../type/technologyType";
import AllTechnologies from "./AllTechnologies";

interface TechnologiesProps {
    technologiesPromise: Promise<Itechnology[]>
}
const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
    const [selectedTechnologies, setselectedTechnologies] = useState<Itechnology[]>([]);

    const technologies = use(technologiesPromise);

    const handleSelectedTechnologies = (technology: Itechnology) => {
        setselectedTechnologies((prev) => [...prev, technology]);
    }

    
    

    return (
        <div className="max-w-[1400px] mx-auto px-4 pt-6">
            <div>
                <h2 className="text-5xl font-bold">Explore the <span className="text-[#D74CAD]">Technologies</span></h2>
                <p className="text-[#526078] text-xl pt-2 font-medium">Pick one technology per category to build your ideal stack.</p>
            </div>



            <AllTechnologies 
            technologies={technologies} 
            selectedTechnologies={selectedTechnologies} 
            handleSelectedTechnologies={handleSelectedTechnologies}
            setselectedTechnologies={setselectedTechnologies}
            ></AllTechnologies>
        </div>
    );
};

export default Technologies;