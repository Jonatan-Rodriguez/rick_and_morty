import styled from 'styled-components';

export const ContainerDetail = styled.div`
    min-height: 91vh;
    height: 100%;
    max-height: 170%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0d0d01;
    padding: 5%;

    .card {
        width: 75%;
        height: 60%;
        max-height: auto;
        transition: all 0.2s;
        position: relative;

        .circle {
            width: 100px;
            height: 100px;
            background: radial-gradient(#b0e633, #53ef7d);
            border-radius: 50%;
            position: absolute;
            animation: move-up6 2s ease-in infinite alternate-reverse;
        }

        .circle:nth-child(1) {
            top: -25px;
            left: -25px;
        }

        .circle:nth-child(2) {
            bottom: -25px;
            right: -25px;
            animation-name: move-down1;
        }

        .card-inner {
            width: 100%;
            height: 100%;
            background: rgba(255,255,255,.05);
            box-shadow: 0 0 10px rgba(0,0,0,0.25);
            backdrop-filter: blur(10px);
            border-radius: 8px;

            display: flex;
            justify-content: center;
            align-items: center;
            padding: 3%;

            .containerCard{
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-direction: row;
                width: 100%;
                height: 100%;
                background-color: #313234;
                border-radius: 8px;
                flex-wrap:wrap;
                padding: 3%;
                gap: 20px 20px;

                .containerImg{
                    border-radius: 8px;
                    width: 300px;
                    height: 300px;

                    .img{
                        border-radius: 15px;
                        width: 100%;
                        height: 100%;
                        background-position: center top;
                        background-size: cover;
                    }
                }

                .containerData{
                    width: 300px;
                    height: 300px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-direction: column;

                    .name{
                        color: #ffffff;
                        font-size: 2.5em;
                    }

                    .data{
                        display: flex;
                        align-items: center;
                        gap: 10px;

                        img{
                            height: 1.7em;
                        }

                        p{
                            font-size: 1.7em;
                            color: #ffffff;
                        }
                    }
                }
            }
            
        }

        @keyframes move-up6 {
            to {
                transform: translateY(-10px);
            }
        }

        @keyframes move-down1 {
            to {
                transform: translateY(10px);
            }
        }
    }

    .card:hover {
        transform: scale(1.02) rotate(1deg);
    }

`