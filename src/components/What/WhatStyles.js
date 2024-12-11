import styled, { keyframes } from "styled-components";

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
export const GalaxyWenWrapper = styled.div`
    background-color: #111;
    color: #fff;
    font-family: "Arial", sans-serif;
    padding: 50px 20px;
    text-align: center;

    h1 {
        font-size: 2.5rem;
        margin-bottom: 20px;
        animation: ${fadeIn} 1s ease-in-out;
    }

    .content {
        max-width: 900px;
        margin: 0 auto;
        font-size: 1.2rem;
        line-height: 1.6;
        animation: ${fadeIn} 1.2s ease-in-out;
    }

    .buttons-container {
        margin-top: 30px;
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;

        a {
            display: inline-block;
            transition: transform 0.3s ease;

            &:hover {
                transform: scale(1.1);
            }

            img {
                width: 50px;
                height: auto;
                filter: drop-shadow(0 0 5px rgba(0, 209, 255, 0.6));
                transition: filter 0.3s ease;

                &:hover {
                    filter: drop-shadow(0 0 10px rgba(0, 209, 255, 0.9));
                }
            }
        }
    }
`;
