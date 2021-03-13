import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: auto;
    > h1{
        margin-bottom: 10px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        color: white;
    }
    
    > .grid-container {
        display: grid;
        width: 100%;
        overflow: auto;
        grid-template-columns: repeat(24, 1fr);
        grid-template-rows: 1fr;
        gap: 15px;
        padding-bottom: 10px;

        >div {
            background: linear-gradient(
                to right bottom,
                rgba(255, 255, 255, 0.3),
                rgba(255, 255, 255, 0.2)
            );
            backdrop-filter: blur(3px);
            -webkit-backdrop-filter: blur(3px);
            box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
            width: 6em;
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: 0.5em 1em;
            position: relative;
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
                font-size: 1.5rem;
                color: #FFF;
            }
        }
    }
    scrollbar-color: white rgba(255, 255, 255, 0.2);
    scrollbar-width: thin;
    
    .loader,
.loader:before,
.loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
}
.loader {
  color: #ffffff;
  font-size: 10px;
  margin: 80px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
.loader:before {
  left: -3.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.5em;
}
@-webkit-keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
@keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
`;
