import styled from 'styled-components';

export const ContainerFavorite = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction:column;
    gap: 20px;
    background-color: #18191a;
    padding: 2% 5%;

    .titleFilter{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        .containerTitle{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;

            img{
                height: 2.5em;
                width: 2.5em;
            }

            .title{
                color: white;
                font-size: 2.5em;
                margin: 0;
                padding: 0;
                font-weight: 600;
                letter-spacing: 3px;
            }
        }

        .containerFilter{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;

            p{
                font-size: 1.7em;
                color: #ffffff;
            }

            .selectContainer{
                display: flex;
                justify-content: center;
                position: relative;

                .selectBox {
                    border: none;
                    appearance: none;
                    padding: 0 30px 0 15px;
                    width: 175px;
                    height: 35px;
                    color: #646464;
                    background-color: #f4f2f2;
                    font-size: 1.5em;
                    border-radius: 30px;
                }

                .iconContainer {
                    width: 30px;
                    height: 100%;
                    position: absolute;
                    right: 1px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #f4f2f2;
                    border-radius: 30px;

                    img{
                        width: 15px;
                        height: 15px;
                    }
                }
            }
        }
    }

    .favorites{
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