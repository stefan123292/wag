import { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Provider from '../Provider/Provider';
import Wrapper from '../Wrapper/Wrapper';
import Navbar from '../Navbar/Navbar';
import KeyFeatures from "../KeyFeatures/KeyFeatures";
import RoadMap from "../RoadMap/RoadMap";
import GalaxyWenInfo from "../What/What";
import Copyright from "../Footer/Footer";
import StarryTokenLanding from "../TokenLandingPage/TokenLandingPage";
import Community from "../Community/Community";
import HowToBuy from "../HowToBuy/HowToBuy";

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
                        <Route exact path="/about">
                            <GalaxyWenInfo />
                            <KeyFeatures />
                        </Route>
                        <Route exact path="/roadmap">
                            <RoadMap />
                        </Route>
                        <Route exact path="/how-to-buy">
                            <HowToBuy />
                        </Route>
                        <Route exact path="/community">
                            <Community />
                        </Route>
                        <Route exact path="/">
                            <StarryTokenLanding/>
                            <GalaxyWenInfo/>
                            <KeyFeatures />
                            <RoadMap />
                            <Copyright/>
                        </Route>
                    </Switch>
                </AnimatePresence>
            </Wrapper>
        </Provider>
    );
};

export default App;
