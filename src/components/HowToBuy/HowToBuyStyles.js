import styled from 'styled-components';

export const HowToBuyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    color: hsl(120, 4%, 41%);
    background-color: #111;
    padding: 2rem;
    text-align: center;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 1rem;
`;

export const StepsContainer = styled.ol`
    background: white;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 2rem;
    max-width: 600px;
    line-height: 1.8;
    font-size: 1.1rem;
    text-align: left;
`;

export const Step = styled.li`
    margin-bottom: 1rem;

    &::marker {
        color: hsl(130, 60%, 40%);
        font-weight: bold;
    }
`;

export const CTAButton = styled.a`
    display: inline-block;
    margin-top: 2rem;
    padding: 10px 20px;
    color: white;
    background-color: hsl(130, 60%, 40%);
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
        background-color: hsl(130, 60%, 35%);
        transform: scale(1.05);
    }
    .buttos-container {
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
                width: 80px;
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
