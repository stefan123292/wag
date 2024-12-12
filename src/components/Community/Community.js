import {CommunityContainer, CommunityLink, Description, LinksContainer, Title} from "./CommunityStyles";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {Universe} from "../TokenLandingPage/TokenLandingPageStyles";
import telegramIcon from "../../assets/images/telegram.png";
import xIcon from "../../assets/images/twitter.png";
import pumpFunLogo from "../../assets/images/pump.png";

const Community = () => {
    const tokenRef = useRef(null);
    const buttonRef = useRef(null);
    const universeRef = useRef(null);

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
        const height = window.innerHeight * 0.9;

        for (let i = 0; i < starCount; ++i) {
            const ypos = Math.random() * height;
            const star = document.createElement("div");
            const speed = 1500 * (Math.random() * maxTime + 1);

            star.style.position = "absolute";
            star.style.top = "90px";
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
        <CommunityContainer>
            <Universe ref={universeRef}/>
            <Title>Join the WagCoin Community</Title>
            <Description>
                Be part of the most fun and engaging crypto community! Whether you love sharing memes, chatting with fellow enthusiasts, or learning about crypto, we’re here to make it enjoyable for everyone.
            </Description>
            <LinksContainer>
                <div className="buttons-container">
                    <a href="https://t.me/+x6SX5geQaecyNGJi" target="_blank" rel="noopener noreferrer">
                        <img src={telegramIcon} alt="Telegram"/>
                    </a>
                    <a href="https://x.com/WagCoin65476" target="_blank" rel="noopener noreferrer">
                        <img src={xIcon} alt="X"/>
                    </a>
                    <a href="#pump-fun">
                        <img src={pumpFunLogo} alt="Pump Fun"/>
                    </a>
                </div>
            </LinksContainer>
        </CommunityContainer>
    );
};

export default Community;
