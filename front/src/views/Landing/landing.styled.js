import styled from 'styled-components';

export const ContainerLanding = styled.div`
    background: linear-gradient(90deg, rgba(24,25,26,1) 0%, rgba(0,0,0,1) 70%);
    width: 100%;
    height:100vh;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;

    .textContainer{
        height: 100%;
        width: 35vw;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;

        img{

        }
        .textBox{

            .text{
                font-size: 5.0em;
                font-family: Arial, Helvetica, sans-serif;
                color: white;
                span{
                    color: #11B0C8;
                }
            }
            .textMin{
                font-size: 3.0em;
                color: white;
            }
        }
    }
    .imgContainer{
        height: 100vh;
        img{
            height: 100%;
            width: auto;
            animation: fadeIn 5s linear;

            @keyframes fadeIn {
                0%{
                opacity: 0;
                transform: scale(0.9)
                }

                50%{
                opacity: 0.5;
                transform: scale(0.95);
                }

                100%{
                opacity: 1;
                transform: scale(1);
                }
            }
        }
    }
`