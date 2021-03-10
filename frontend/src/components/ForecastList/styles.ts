import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > h1{
        margin-bottom: 10px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        color: white;
    }
    
    > .grid-container {
        display: grid;
        width: 100%;
        height: 19vh;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: 1fr;
        gap: 25px;
        /* padding: 15px 130px; */
        justify-content: center;
        align-items: center;


        >div {
            background-color: rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(3px);
            -webkit-backdrop-filter: blur(3px);
            width: 100%;
            height: 100%;
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: 6px 0px;

            > div{
                text-align: center;
                >h3{
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 300;
                    font-size: 19px;
                    color: #FFF;
                }
            }

            > h2 {
                font-family: 'Montserrat', sans-serif;
                font-weight: 600;
                font-size: 24px;
                color: #FFF;
            }
        }
    }
`;
