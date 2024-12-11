import {Floki, Brett, Ponke, Bonk, Doge, Pepe, Shiba, Wif} from './KeyVisualStyles';

const PlanetSwitch = ({ data, activePlanet }) => {
    const planetSwitch = () => {
        switch (data.name) {
            case 'Floki':
                return (
                    <Floki
                        to={data.path}
                        aria-label={`${data.name} page`}
                        $isActive={activePlanet === data.path}
                        $planetColor={data.sectionColor}
                    />
                );
            case 'Wif':
                return (
                    <Wif
                        to={data.path}
                        aria-label={`${data.name} page`}
                        $isActive={activePlanet === data.path}
                        $planetColor={data.sectionColor}
                    />
                );
            case 'Shiba':
                return (
                    <Shiba
                        to={data.path}
                        aria-label={`${data.name} page`}
                        $isActive={activePlanet === data.path}
                        $planetColor={data.sectionColor}
                    />
                );
            case 'Pepe':
                return (
                    <Pepe
                        to={data.path}
                        aria-label={`${data.name} page`}
                        $isActive={activePlanet === data.path}
                        $planetColor={data.sectionColor}
                    />
                );
            case 'Doge':
                return (
                    <Doge
                        to={data.path}
                        aria-label={`${data.name} page`}
                        $isActive={activePlanet === data.path}
                        $planetColor={data.sectionColor}
                    />
                );
            case 'Bonk':
                return (
                    <Bonk
                        to={data.path}
                        aria-label={`${data.name} page`}
                        $isActive={activePlanet === data.path}
                        $planetColor={data.sectionColor}
                    />
                );
            case 'Ponke':
                return (
                    <Ponke
                        to={data.path}
                        aria-label={`${data.name} page`}
                        $isActive={activePlanet === data.path}
                        $planetColor={data.sectionColor}
                    />
                );
            case 'Brett':
                return (
                    <Brett
                        to={data.path}
                        aria-label={`${data.name} page`}
                        $isActive={activePlanet === data.path}
                        $planetColor={data.sectionColor}
                    />
                );
        }
    };
    return <>{planetSwitch()}</>;
};

export default PlanetSwitch;
