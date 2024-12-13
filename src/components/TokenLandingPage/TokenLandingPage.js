import { gsap } from "gsap";
import {useEffect, useRef} from "react";
import wagImg from "../../assets/images/wag.png"
import { useHistory } from 'react-router-dom';
import {
    Content,
    CTAButton,
    LandingContainer,
    Subtitle,
    Title,
    Token,
    TokenImage,
    Universe
} from "./TokenLandingPageStyles";


const StarryTokenLanding = () => {
    const tokenRef = useRef(null);
    const buttonRef = useRef(null);
    const universeRef = useRef(null);
    const history = useHistory(); // Access the history object

    const handleClick = () => {
        history.push('/about'); // Navigate to the /about page
    };
    useEffect(() => {
        // GSAP animation for the token
        gsap.fromTo(
            tokenRef.current,
            { scale: 0, opacity: 0, rotation: 0 },
            {
                scale: 1,
                opacity: 1,
                rotation: 360,
                duration: 2,
                ease: "bounce.out",
                repeat: -1,
                yoyo: true,
            }
        );

        // GSAP animation for the button
        gsap.from(buttonRef.current, {
            opacity: 0,
            y: 50,
            duration: 1.5,
            delay: 1,
            ease: "power3.out",
        });

        // Starry sky animation
        const starCount = 500;
        const maxTime = 31;
        const universe = universeRef.current;
        const width = window.innerWidth;
        const height = window.innerHeight;

        for (let i = 0; i < starCount; ++i) {
            const ypos = Math.random() * height;
            const star = document.createElement("div");
            const speed = 1500 * (Math.random() * maxTime + 1);

            star.style.position = "absolute";
            star.style.height = `${1 + Math.random() * 3}px`;
            star.style.width = star.style.height;
            star.style.backgroundColor = "white";
            star.style.borderRadius = "50%";

            universe.appendChild(star);

            star.animate(
                [
                    { transform: `translate3d(${width}px, ${ypos}px, 0)` },
                    { transform: `translate3d(-${Math.random() * 256}px, ${ypos}px, 0)` },
                ],
                { delay: Math.random() * -speed, duration: speed, iterations: Infinity }
            );
        }
    }, []);

    return (
        <LandingContainer>
            <Universe ref={universeRef}/>
            <Content>
                <Title>Welcome to WagCoin</Title>
                <Subtitle>The meme coin that makes crypto fun and rewarding.</Subtitle>
                <div style={{ marginBottom: '15px'}}>
                    <CTAButton onClick={handleClick} ref={buttonRef}>Explore</CTAButton>
                </div>
            </Content>
            <Token ref={tokenRef}>
                <TokenImage src={wagImg} alt="Wag"/>
            </Token>
        </LandingContainer>
    );
};

export default StarryTokenLanding;
