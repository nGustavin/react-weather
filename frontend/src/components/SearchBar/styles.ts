import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    padding: 20px;
    svg{
        position: relative;
        fill: gray;
        stroke: gray;
        left: 1.8rem;
        z-index: 100;
    }
    > input{
        font-size: 1rem;
        width: 60%;
        padding: 0.5rem 1rem;
        padding-left: 2rem;
        border-radius: 5rem;
        border: none;
        color: gray;
        filter: drop-shadow(0 2px 1px rgba(0, 0, 0, 0.25));
    }
`;
