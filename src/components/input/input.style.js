import styled from 'styled-components';

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;

export const InputLabel = styled.label`
    min-height: 25px;
    font-family: 'Bebas Neue';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
`;

export const InputStyle = styled.input`
    width: 421px;
    height: 42px;
    padding: 12px 18px;
    outline: none;
    transition: border .3s;

    color: var(--white);
    background-color: inherit;
    
    border: 1px solid var(--white);
    border-radius: 30px;

    font-family: 'Avenir Next Cyr';
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    &:focus {
        border: 1px solid var(--orange);
    }

    &:placeholder-shown {
        color: rgba(255,255,255, .5);
    }
`;