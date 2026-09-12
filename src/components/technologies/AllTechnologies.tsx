import type { Itechnology } from "../type/technologyType";
import SelectedCard from "./SelectedCard";
import TechnologyCard from "./TechnologyCard";

interface AllTechnologiesProps {
    technologies: Itechnology[];
}

const AllTechnologies = ({technologies}: AllTechnologiesProps) => {
    return (
        <div className="grid grid-cols-[70%_30%] gap-6">
            <div className="grid grid-cols-3 gap-4">
                {technologies.map((technology) => {
                    return (
                        <div>
                            <TechnologyCard key={technology.id} technology={technology}></TechnologyCard>
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