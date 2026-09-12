import { use } from "react";
import type { Itechnology } from "../type/technologyType";
import AllTechnologies from "./AllTechnologies";

interface TechnologiesProps {
    technologiesPromise: Promise<Itechnology[]>
}
const Technologies = ({ technologiesPromise }: TechnologiesProps) => {

    const technologies = use(technologiesPromise);
    return (
        <div className="max-w-[1400px] mx-auto px-4 pt-6">
            <div>
                <h2 className="text-5xl font-bold">Explore the <span className="text-[#D74CAD]">Technologies</span></h2>
                <p className="text-[#526078] text-xl pt-2 font-medium">Pick one technology per category to build your ideal stack.</p>
            </div>



            <AllTechnologies technologies={technologies}></AllTechnologies>
        </div>
    );
};

export default Technologies;