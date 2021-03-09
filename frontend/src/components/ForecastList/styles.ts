import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > h1{
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        margin-left: 30px;
    }
    
    > .grid-container {
        display: grid;
        width: 100%;
        height: 190px;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: 1fr;
        gap: 15px;
        padding: 15px 30px;

        >div {
            background-color: rgba(255, 255, 255, 0.6);
            width: 85%;
            height: 100%;
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;


            > div{
                text-align: center;
                >h3{
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 300;
                    font-size: 20px;
                }
            }

            > h2 {
                font-family: 'Montserrat', sans-serif;
                font-weight: 400;
                font-size: 26px;
            }
        }
    }
`;
