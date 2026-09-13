import type { Itechnology } from "../type/technologyType";
import SelectedCard from "./SelectedCard";
import TechnologyCard from "./TechnologyCard";

interface AllTechnologiesProps {
    technologies: Itechnology[];
    handleSelectedTechnologies: (technology: Itechnology) => void;
}

const AllTechnologies = ({technologies, handleSelectedTechnologies}: AllTechnologiesProps) => {
    return (
        <div className="grid grid-cols-[70%_30%] gap-8 mt-[40px]">
            <div className="grid grid-cols-3 gap-9">
                {technologies.map((technology) => {
                    return (
                        <div>
                        <TechnologyCard handleSelectedTechnologies={handleSelectedTechnologies} key={technology.id} technology={technology}></TechnologyCard>
                        </div>
                    )})}
            </div>
            <div>
                <SelectedCard></SelectedCard>
            </div>
        </div> 
    );
};

export default AllTechnologies;