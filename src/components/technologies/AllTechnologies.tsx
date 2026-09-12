import type { Itechnology } from "../type/technologyType";

interface AllTechnologiesProps {
    technologies: Itechnology[];
}

const AllTechnologies = ({technologies}: AllTechnologiesProps) => {
    return (
        <div>
            {
                technologies.map(technology => {
                    return <div>
                        
                        <li className="text-green-500 font- bold">{technology.name}</li>
                    </div>
                })
            }
        </div>
    );
};

export default AllTechnologies;