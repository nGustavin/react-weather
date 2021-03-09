import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row: 1fr;
    margin: auto 0;
    > div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    > .currentWeather .symbol{
        width: 150px;
        height: 150px;
        background-color: gray;
        margin-right: 2vw;
    }
    > .weatherData{
        background: rgb(255, 255, 255, 0.3);
        padding: 20px;

        color: white;
        border-radius: 10px;
        
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 2fr; 
    }

    > .weatherData div{
        text-align: center;
    }
`;
