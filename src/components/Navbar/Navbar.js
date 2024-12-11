import { useEffect, useState } from 'react';
import {Header, Logo, LogoLink, Container, Home} from './NavbarStyles';
import NavMobile from './NavMobile/NavMobile';
import NavDesktop from './NavDesktop/NavDesktop';
import logoImage from "../../assets/wen-modified.png"; // Path to your logo image

const Navbar = ({ pathName, activePlanet, onHover }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const tabletBreakpoint = 768;

    useEffect(() => {
        window.addEventListener('resize', () =>
            setWindowWidth(window.innerWidth)
        );
    }, [windowWidth]);

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 1.5, duration: 4 },
        },
        exit: {
            opacity: 0,
            transition: { duration: 1 },
        },
    };

    return (
        <Header
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Container>
                <Logo>
                    <LogoLink to="/">
                        <Home>
                            <img src={logoImage} alt="GalaxyWen Logo"/>
                            <p>GalaxyWen</p>
                        </Home>
                    </LogoLink>
                </Logo>
                {windowWidth >= tabletBreakpoint ? (
                    <NavDesktop
                        pathName={pathName}
                        onHover={onHover}
                        activePlanet={activePlanet}
                    />
                ) : (
                    <NavMobile windowWidth={windowWidth} />
                )}
            </Container>
        </Header>
    );
};

export default Navbar;
