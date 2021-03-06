import styled from 'styled-components';

export const Container = styled.div`
    /* padding: 40px 130px; */
    display: flex;
    width: 100%;
    align-items: center;
    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        width: 100%;
    }
    > div:first-child{
        img{
            width: 15vw;
        }
        h1{
            font-size: 6rem;
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
            line-height: 5.5rem;
        }
        p{
            width: 15rem;
            font-family: 'Montserrat', sans-serif;
            font-size: 1.5rem;
        }
    }

    > .weatherData{
        background: linear-gradient(
            to right bottom,
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.2)
        );
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
        -webkit-backdrop-filter: blur(3px);
        backdrop-filter: blur(3px);
        width: 100%;
        color: white;
        border-radius: 10px;

        display: flex;
        flex-wrap: wrap;

        div{
            width: 33%;
            display: flex;
            flex-direction: column;
            align-items:center;
            justify-content: center;
            margin: 2em 0;
            h2{
                font-size: 1.5em;
                text-align: center;
                font-family: 'Montserrat', sans-serif;
                font-weight: 600;
            }

            h3{
                font-size: 1.25em;
                text-align: center;
                font-family: 'Montserrat', sans-serif;
                font-weight: 500;
            }
        }

    }

    
`;
