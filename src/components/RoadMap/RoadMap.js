import { roadmapData } from "./data";
import {RoadmapStyles} from "./RoadMapStyles";
import wenIma from "../../assets/wen-modified.png"

const RoadMap = () => {

    return (
        <RoadmapStyles>
            <h1>GalaxyWen Roadmap</h1>
            <div className="roadmap-container">
                {roadmapData.map((item, index) => (
                    <div className="roadmap-item" key={index}>
                        <h2>{item.phase}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            <img src={wenIma} alt="wen"/>
        </RoadmapStyles>
    );
};

export default RoadMap;
