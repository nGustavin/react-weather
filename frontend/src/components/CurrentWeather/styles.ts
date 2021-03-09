import styled from 'styled-components';

export const Container = styled.div`
    /* padding: 40px 130px; */
    display: flex;
    width: 100%;
    height: 100%;
    margin: 10px 0;
    margin-top: auto;
    align-items: center;
    justify-content: flex-end;
    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        width: 100%;
    }
    > div:first-child{
        h1{
            font-size: 6rem;
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
        }
        p{
            line-height: 0;
            font-size: 2rem;
        }
    }

    > .weatherData{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: rgb(255, 255, 255, 0.3);
        /* padding: 20px; */
        width: 100%;
        min-height: 50%;


        color: white;
        border-radius: 10px;
        > div {
            width: 100%;
            height: 100%; 
            display: flex;
            align-items: center;
            justify-content: space-around;

           >div{
               
                >h2{
                    font-size: 1.5em;
                    text-align: center;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 500;
                }

                >h3{
                    font-size: 1.5em;
                    text-align: center;
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 500;
                }
           }
        }
    }

    
`;
