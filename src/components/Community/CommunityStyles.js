import styled from 'styled-components';

export const CommunityContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: black;
    color: cornsilk;
    padding: 2rem;
    text-align: center;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 1rem;
`;

export const Description = styled.p`
    font-size: 1.1rem;
    max-width: 700px;
    margin-bottom: 2rem;
    line-height: 1.6;
`;

export const LinksContainer = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
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

export const CommunityLink = styled.a`
    text-decoration: none;
    color: white;
    background-color: hsl(220, 90%, 50%);
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
        background-color: hsl(220, 90%, 40%);
        transform: scale(1.05);
    }
`;
