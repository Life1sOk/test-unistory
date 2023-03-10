import styled from 'styled-components';

export const MainStyle = styled.section`
    position: relative;

    width: 100%;
    min-height: 596px;
    margin-top: 144px;

    font-weight: 700;
    font-size: 120px;
`;

export const TextWrapper = styled.div`
    position: absolute;
    left: 64px;
    top: 441px;
`;

export const StatusBox = styled.div`
    position: absolute;
    width: 199px;
    height: 291px;
    left: 1177px;
    top: 173px;

    font-family: 'Bebas Neue';
    font-weight: 700;
    letter-spacing: 1px;

    display: flex;
    flex-direction: column;
`;

export const StatsTitle = styled.h4`
    margin-bottom: 34px;
    color: var(--white);
    font-size: 32px;
`;

export const Stat = styled.div`
    width: 100%;
    padding: 8px 0;
    border-bottom: ${({ last }) => last ? 'none' : '0.5px solid rgba(210, 196, 196, 1)'};

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Number = styled.p`
    min-height: 28px;
    font-size: 28px;
    line-height: 120%;
    color: var(--orange);
`;

export const Label = styled.p`
    min-height: 22px;;
    font-size: 18px;
    color: var(--white);
`;