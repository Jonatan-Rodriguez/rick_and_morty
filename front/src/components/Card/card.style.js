import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* max-width: 200px; */
    width: 220px;
    min-width: 200px;
    height: 350px;
    background-color: #242526;
    border-radius: 8px;
    padding: 13px;
    gap: 10px;

    .imgContainer{
        width: 100%;
        height: 45%;
        position: relative;
        border-radius: 15px;

        img{
            border-radius: 15px;
            height: 100%;
            width: 100%;
            background-position: center top;
            background-size: cover;
        }

        .overlay{
            position: absolute;
            border-radius: 15px;
            width: 0;
            height: 0;
            background-color: rgba(12,12,12,0.60);
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            transition: .5s ease;
        }

        .overlay p {
            color: #ffff;
            font-size: 2em;
            font-weight: 300;
            opacity: 0;

        }
        .infoIco{
            height: auto;
            width: 20px;
            margin-right: 5px;
        }

    }

    .imgContainer:hover .overlay{
        height: 100%;
        width: 100%;
    }

    .imgContainer:hover .overlay p{
        opacity: 1;
    }

    .dataContainer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 45%;

        .dataInfo{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            
            h2{
                font-style: bold;
                color: white;
                font-size: 1.5em;
                margin: 0;
                padding: 0;
            }
            
            p{
                display: flex;
                color: white;
                font-size: 1.3em;
                
                img{
                    width: 20px;
                    margin-right:5px;
                }
            }
        }

        .btnLike{
            .likeIco{
                font-size: 25px;
                cursor: pointer;
            }
        }
    }

    .btnDelete{
        height: 10%;
        width: 100%;
        display: flex;
        align-items: center;

        .button {
            position: relative;
            width: 100px;
            height: 25px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #cc0000;
            background-color: #e50000;
            overflow: hidden;
            border-radius: 40px;
        }

        .button, .button__icon, .button__text {
            transition: all 0.3s;
        }

        .button .button__text {
            color: white;
            font-weight: 600;
            font-size: 1.1em;
        }

        .button .button__icon {
            position: absolute;
            transform: translateX(100px);
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            img{
                width: auto;
                height: 90%;
                color: white;
            }
        }

        .button:hover .button__text {
            color: transparent;
        }

        .button:hover .button__icon {
            transform: translateX(0);
        }
    }
`