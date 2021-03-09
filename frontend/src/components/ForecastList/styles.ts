import styled from 'styled-components';

export const Container = styled.div`
    background: #17418D;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    
    > .grid-container {
        display: grid;
        width: 100%;
        height: 180px;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: 1fr;
        gap: 15px;
        padding: 15px;

        >div{
            background-color: rgba(255, 255, 255, 0.6);
            width: 100%;
            height: 100%;
            border-radius: 6px;
        }
    }
`;

