import styled from 'styled-components';

export const BlackBoxWrapper = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    background-color: rgba(23, 23, 23, 0.81);
    
    position: absolute;
    top: 0;
    left: 0;
`;

export const ExtentinWindowStyle = styled.div`
    width: 422px;
    height: 295px;
    padding: 48px 0;
    background: var(--secondary-background);

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const ExtentionDescription = styled.p`
    max-width: 320px;
    color: var(--white);
    text-align: center;
    
    font-family: 'Inter';
    font-weight: 400;
    font-size: 19px;
    line-height: 120%;

    & .marked {
        color: var(--orange);
    }
`;