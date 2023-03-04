import styled from 'styled-components';

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