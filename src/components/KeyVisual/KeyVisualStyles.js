import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { asteroidsBackground } from './asteroidsBackground';
import wenImage from '../../assets/wen-modified.png';
import shibaImage from '../../assets/images/Shiba_Inu_coin_logo.png';
import ponkeImage from '../../assets/images/ponke.png';
import pepeImage from '../../assets/images/pepe-pepe-logo.png';
import bonkImage from '../../assets/images/bonk.png';
import brettImage from '../../assets/images/brett.png';
import dogImage from '../../assets/images/Dogecoin_Logo.png';
import wifImage from '../../assets/images/wif.png';
import flokingImage from '../../assets/images/floki.png';

import { NavLink } from 'react-router-dom';

export const Container = styled(motion.div)`
    position: relative;
    min-height: 100vh;
`;

export const Planet = styled(NavLink)`
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid rgba(102, 166, 229, 0.12);
    border-radius: 1000px;
    transform: translate(-50%, -50%);
    transition: border 300ms ease;

    &::before {
        position: absolute;
        content: '';
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 100px;
        transition: transform 300ms ease;
    }

    @keyframes orbit {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(-360deg);
        }
    }

    @media (min-width: 768px) {
        &:hover {
            border: 1px solid ${(props) => props.$planetColor};

            &::before {
                transform: scale(1.5) translate(-50%, -50%);
            }
        }

        &:focus {
            outline: none;
        }

        &:focus-visible {
            border: 1px solid ${(props) => props.$planetColor};

            &::before {
                transform: scale(1.5) translate(-50%, -50%);
            }
        }

        ${(props) =>
            props.$isActive
                ? css`
                      border: 1px solid ${(props) => props.$planetColor};
                      &::before {
                          transform: scale(1.5) translate(-50%, -50%);
                      }
                  `
                : ''};
    }
`;

export const Wen = styled.div`
    position: absolute;
    z-index: 500;
    top: 50%;
    left: 50%;
    height: 120px;
    width: 120px;
    border-radius: 1000px;
    background-image: url(${wenImage});
    background-size: cover;
    box-shadow: 0 0 10px 2px rgba(255, 107, 0, 0.4),
        0 0 22px 11px rgba(255, 203, 0, 0.13);
    transform: translate(-50%, -50%);
    @media (max-width: 768px) {
        width: 80px;
        height: 80px;
    }
`;

export const Floki = styled(Planet)`
    width: 100px;
    height: 100px;
    animation: orbit 7.1867s linear infinite;
    z-index: 100;

    &::before {
        height: 8px;
        width: 8px;
        background-image: url(${flokingImage});
        background-size: cover;
    }

    @media (max-width: 768px) {
        width: 60px;
        height: 60px;
        animation-duration: 5s;
    }
`;

export const Wif = styled(Planet)`
    width: 130px;
    height: 130px;
    animation: orbit 18.4555s linear infinite;
    z-index: 99;

    &::before {
        height: 20px;
        width: 20px;
        background-image: url(${wifImage});
        background-size: cover;
    }

    @media (max-width: 768px) {
        width: 80px;
        height: 80px;
        animation-duration: 12s;
    }
`;

export const Shiba = styled(Planet)`
    width: 175px;
    height: 175px;
    animation: orbit 30s linear infinite;
    z-index: 98;

    &::before {
        width: 30px;
        height: 30px;
        background-image: url(${shibaImage});
        background-size: cover;
    }

    @media (max-width: 768px) {
        width: 110px;
        height: 110px;
        animation-duration: 20s;
    }
`;

export const Pepe = styled(Planet)`
    width: 220px;
    height: 220px;
    animation: orbit 56.4261s linear infinite;
    z-index: 97;

    &::before {
        width: 40px;
        height: 40px;
        background-image: url(${pepeImage});
        background-size: cover;
    }

    @media (max-width: 768px) {
        width: 140px;
        height: 140px;
        animation-duration: 35s;
    }
`;

export const Doge = styled(Planet)`
    width: 370px;
    height: 370px;
    animation: orbit 355.7228s linear infinite;
    z-index: 96;

    &::before {
        width: 50px;
        height: 50px;
        background-image: url(${dogImage});
        background-size: cover;
    }

    @media (max-width: 768px) {
        width: 200px;
        height: 200px;
        animation-duration: 150s;
    }
`;

export const Bonk = styled(Planet)`
    width: 470px;
    height: 470px;
    animation: orbit 882.6952s linear infinite;
    z-index: 95;

    &::before {
        width: 60px;
        height: 60px;
        background-image: url(${bonkImage});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }

    @media (max-width: 768px) {
        width: 250px;
        height: 250px;
        animation-duration: 300s;
    }
`;

export const Ponke = styled(Planet)`
    width: 550px;
    height: 550px;
    animation: orbit 2512.4002s linear infinite;
    z-index: 94;

    &::before {
        width: 80px;
        height: 80px;
        background-image: url(${ponkeImage});
        background-size: cover;
    }

    @media (max-width: 768px) {
        width: 300px;
        height: 300px;
        animation-duration: 500s;
    }
`;

export const Brett = styled(Planet)`
    width: 660px;
    height: 660px;
    animation: orbit 4911.7839s linear infinite;
    z-index: 93;

    &::before {
        width: 100px;
        height: 100px;
        background-image: url(${brettImage});
        background-size: cover;
    }

    @media (max-width: 768px) {
        width: 350px;
        height: 350px;
        animation-duration: 800s;
    }
`;

export const AsteroidsBelt = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid rgba(102, 166, 229, 0.12);
    border-radius: 1000px;
    transform: translate(-50%, -50%);

    height: 330px;
    width: 330px;
    opacity: 0.7;
    border-color: transparent;
    overflow: hidden;
    animation: orbit 179.9558282773s linear infinite;

    &::before {
        position: absolute;
        content: '';
        left: 50%;
        transform: translate(-50%, -50%);
        top: 50%;
        height: 210px;
        width: 210px;
        background: transparent;
        border-radius: 140px !important;
        box-shadow: ${asteroidsBackground};
    }

    @keyframes orbit {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(-360deg);
        }
    }
`;
