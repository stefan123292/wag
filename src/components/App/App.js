import { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Provider from '../Provider/Provider';
import Wrapper from '../Wrapper/Wrapper';
import Navbar from '../Navbar/Navbar';
import Pepe from '../../pages/Pepe/Pepe';
import Doge from '../../pages/Doge/Doge';
import Bonk from '../../pages/Bonk/Bonk';
import Ponke from '../../pages/Ponke/Ponke';
import Brett from '../../pages/Brett/Brett';
import KeyVisual from '../KeyVisual/KeyVisual';
import Floki from "../../pages/Floki/Floki";
import Wif from "../../pages/Wif/Wif";
import Shiba from "../../pages/Shiba/Shiba";
import KeyFeatures from "../KeyFeatures/KeyFeatures";
import RoadMap from "../RoadMap/RoadMap";
import GalaxyWenInfo from "../What/What";

const App = () => {
    const location = useLocation();
    const [activePlanet, setActivePlanet] = useState('/');

    return (
        <Provider>
            <Wrapper>
                <Navbar
                    pathName={location.pathname}
                    onHover={setActivePlanet}
                    activePlanet={activePlanet}
                />
                <AnimatePresence>
                    <Switch location={location} key={location.key}>
                        <Route exact path="/floki">
                            <Floki />
                        </Route>
                        <Route exact path="/wif">
                            <Wif />
                        </Route>
                        <Route exact path="/shiba">
                            <Shiba />
                        </Route>
                        <Route exact path="/pepe">
                            <Pepe />
                        </Route>
                        <Route exact path="/doge">
                            <Doge />
                        </Route>
                        <Route exact path="/bonk">
                            <Bonk />
                        </Route>
                        <Route exact path="/ponke">
                            <Ponke />
                        </Route>
                        <Route exact path="/brett">
                            <Brett />
                        </Route>
                        <Route exact path="/">
                            <KeyVisual activePlanet={activePlanet} />
                            <GalaxyWenInfo/>
                            <KeyFeatures />
                            <RoadMap />
                        </Route>
                    </Switch>
                </AnimatePresence>
            </Wrapper>
        </Provider>
    );
};

export default App;
