import type { Dispatch, SetStateAction } from "react";
import type { Itechnology } from "../type/technologyType";
import SelectedCard from "./SelectedCard";
import TechnologyCard from "./TechnologyCard";

interface AllTechnologiesProps {
    technologies: Itechnology[];
    handleSelectedTechnologies: (technology: Itechnology) => void;
    selectedTechnologies: Itechnology[];
    setselectedTechnologies: Dispatch<SetStateAction<Itechnology[]>>;
}

const AllTechnologies = ({
    technologies,
    handleSelectedTechnologies,
    selectedTechnologies,
    setselectedTechnologies,
}: AllTechnologiesProps) => {
    return (        //flex flex-col lg:flex-row gap-6
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8 mt-[40px]">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {technologies.map((technology) => (
                    <div key={technology.id}>
                        <TechnologyCard
                            handleSelectedTechnologies={handleSelectedTechnologies}
                            technology={technology}
                            selectedTechnologies={selectedTechnologies}
                        ></TechnologyCard>
                    </div>
                ))}
            </div>

            <div>
                <SelectedCard
                    selectedTechnologies={selectedTechnologies}
                    setselectedTechnologies={setselectedTechnologies}
                ></SelectedCard>
            </div>

        </div>
    );
};

export default AllTechnologies;