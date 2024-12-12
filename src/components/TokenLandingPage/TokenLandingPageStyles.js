import styled from "styled-components";

export const LandingContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
`;

export const Universe = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
`;

export const Content = styled.div`
    z-index: 2;
    text-align: center;
`;

export const Title = styled.h1`
    font-size: 3rem;
    margin-bottom: 20px;
    font-family: "Antonio", sans-serif;
`;

export const Subtitle = styled.p`
    font-size: 1.2rem;
    margin-bottom: 30px;
    font-family: "Spartan", sans-serif;
`;

export const CTAButton = styled.button`
    padding: 12px 12px;
    background-color: #ff7b00; /* Bright and playful orange */
    color: #ffffff;
    border: none;
    border-radius: 8px; /* Slightly rounded corners */
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: #e56f00; /* Slightly darker shade */
        transform: scale(1.05); /* Subtle scaling effect */
    }

    &:active {
        background-color: #cc6200;
        transform: scale(1); /* Reset scale on click */
    }
`;

export const Token = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    margin-top: 20px;
`;

export const TokenImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
