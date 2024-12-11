import styled, { keyframes } from "styled-components";

// Fade-in animation
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

// Styled Components for Roadmap
export const RoadmapStyles = styled.div`
  background-color: #111; /* Dark background */
  color: #fff; /* White text */
  font-family: Arial, sans-serif;
  padding: 50px 20px;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 30px;
    animation: ${fadeIn} 1s ease-in-out;
  }

  .roadmap-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin: 0 auto;
    max-width: 800px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: 4px;
      height: 100%;
      background-color: #444;
      transform: translateX(-50%);
      z-index: 0;

      @media (max-width: 768px) {
        left: 20px;
      }
    }
  }

  .roadmap-item {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
    width: 100%;
    max-width: 400px;
    animation: ${fadeIn} 1s ease-in-out;
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-10px);
    }

    @media (max-width: 768px) {
      margin-left: 40px;
    }

    h2 {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }

    p {
      font-size: 1rem;
      line-height: 1.4;
    }

    &::before {
      content: "";
      position: absolute;
      top: 20px;
      left: -35px;
      width: 20px;
      height: 20px;
      background-color: #00d1ff;
      border-radius: 50%;
      z-index: 2;

      @media (max-width: 768px) {
        left: -20px;
      }
    }
  }

  .roadmap-item:nth-child(even) {
    align-self: flex-end;
  }
    img {
        width: 100%; /* Make the image responsive */
        max-width: 600px; /* Set a maximum width for the image */
        height: auto; /* Maintain aspect ratio */
        margin-top: 20px;
        border-radius: 10px; /* Optional: rounded corners */
        animation: ${fadeIn} 1.5s ease-in-out;

        @media (max-width: 768px) {
            max-width: 90%; /* Adjust size for smaller screens */
        }
    }
`;
