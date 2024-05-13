import styled from 'styled-components';

export const ContainerFilterFav = styled.div`
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
            width: 135px;
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
`