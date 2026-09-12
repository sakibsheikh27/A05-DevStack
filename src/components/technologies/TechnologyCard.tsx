import type { Itechnology } from "../type/technologyType";

const TechnologyCard = ({technology}:{technology:Itechnology}) => {

    console.log(technology)
    return (
        <div>
            <div>
                <div>
                    <div>
                        <span>icon</span>
                        <p>{technology.badge}</p>
                    </div>
                    <h2>{technology.name}</h2>
                    <p>{technology.description}</p>
                    <div>
                        <span>{technology.category}</span>
                        <span>{technology.level}</span>
                        <span>{technology.rating}</span>
                    </div>
                    <button>Add to Stack</button>
                </div>
            </div>
            
        </div>
    );
};

export default TechnologyCard;