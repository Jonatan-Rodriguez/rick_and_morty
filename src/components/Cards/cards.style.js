import styled from "styled-components";

export const ContainerCards = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction:column;
    gap: 20px;
    background-color: #1E1E1E;
    padding: 2% 5%;

    .logoHome{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px 0;

        .logo{
            height: 150px;
        }
    }
    
    .search{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;

        .btnRandom {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 6px 12px;
            gap: 8px;
            height: 35px;
            width: 125px;
            border: none;
            background: #11B0C850;
            border-radius: 20px;
            cursor: pointer;

            .icon{
                width: 25px;
                height: auto;
            }
            
            .text {
                line-height: 20px;
                font-size: 17px;
                color: #ffff;
                font-family: sans-serif;
                letter-spacing: 1px;
            }
        }


        .btnRandom:hover {
            background: #11B0C890;
        }

        .btnRandom:hover .icon {
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(-360deg);
            }
        }
    }

    .containerTitle{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        img{
            height: 3em;
            width: 3em;
        }

        .title{
            color: white;
            font-size: 2em;
            margin: 0;
            padding: 0;
            font-weight: 600;
            letter-spacing: 3px;
        }
    }

    .cards{
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction:row;
        flex-wrap:wrap;
        gap: 20px 20px;
        width: 100%;
        height: 100%;
    }

`