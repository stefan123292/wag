import { data } from './data'
import {KeyFeaturesStyles} from "./KeyFeaturesStyles";

const KeyFeatures = () => {
    return (
        <KeyFeaturesStyles>
            <h1>Key Features</h1>
            <div className="features-container">
                {data.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <h2>{feature.title}</h2>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </KeyFeaturesStyles>
    );
}
export default KeyFeatures;
