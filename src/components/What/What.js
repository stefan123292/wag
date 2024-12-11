import {GalaxyWenWrapper} from "./WhatStyles";
import telegramIcon from "../../assets/images/telegram.png";
import xIcon from "../../assets/images/twitter.png";
import pumpFunLogo from "../../assets/images/pump.png";

const GalaxyWenInfo = () => {
    return (
        <GalaxyWenWrapper>
            {/* What is GalaxyWen */}
            <h1 className="section-title">What is GalaxyWen?</h1>
            <p className="content">
                GalaxyWen ($GWEN) is not just another meme coin. It's a movement for dreamers, degens, and meme lovers
                who are tired of asking "Wen Moon?" and are ready to ask "Wen Galaxy?" Instead of limits, we aim for
                endless possibilities, powered by community energy, memes, and interstellar ambitions.
            </p>

            {/* Call to Action Buttons */}
            <div className="buttons-container">
                <a href="https://t.me/+uMIbwKhA4XZmMmNi" target="_blank" rel="noopener noreferrer">
                    <img src={telegramIcon} alt="Telegram"/>
                </a>
                <a href="https://x.com/WenGalaxyCoin" target="_blank" rel="noopener noreferrer">
                    <img src={xIcon} alt="X"/>
                </a>
                <a href="#pump-fun">
                    <img src={pumpFunLogo} alt="Pump Fun"/>
                </a>
            </div>
        </GalaxyWenWrapper>
    );
};

export default GalaxyWenInfo;
