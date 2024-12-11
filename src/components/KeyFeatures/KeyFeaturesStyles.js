import styled from "styled-components";

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
export const KeyFeaturesStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #111; /* Dark background */
  color: #fff; /* White text */
  font-family: Arial, sans-serif;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    animation: ${fadeIn} 1s ease-in-out;
    text-align: center;
  }

  .features-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 800px;
    animation: ${fadeIn} 1s ease-in-out;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-around;
    }
  }

  .feature-card {
    background-color: rgba(255, 255, 255, 0.1); /* Slight transparency */
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-10px); /* Lift effect on hover */
    }

    h2 {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }

    p {
      font-size: 1rem;
      line-height: 1.5;
    }
  }
`;
