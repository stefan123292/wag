import {GalaxyWenWrapper} from "./WhatStyles";
import telegramIcon from "../../assets/images/telegram.png";
import xIcon from "../../assets/images/twitter.png";
import pumpFunLogo from "../../assets/images/pump.png";

const GalaxyWenInfo = () => {
    return (
        <GalaxyWenWrapper>
            {/* What is GalaxyWen */}
            <h1 className="section-title">What is WagCoin?</h1>
            <p className="content">
                WagCoin is more than just a meme token—it's a celebration of fun, community, and playful vibes.
                Designed for meme enthusiasts and crypto dreamers alike, WagCoin brings laughter and lighthearted energy
                to the blockchain.
                Why settle for "Wen Moon?" when you can enjoy the journey with a wagging tail and endless smiles?
            </p>

            {/* Call to Action Buttons */}
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
        </GalaxyWenWrapper>
    );
};

export default GalaxyWenInfo;
