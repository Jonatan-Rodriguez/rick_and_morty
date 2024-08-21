import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* max-width: 200px; */
    width: 250px;
    min-width: 200px;
    height: 350px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 30px;
    padding: 8px;
    gap: 10px;
    

    .imgContainer{
        width: 100%;
        height: 65%;
        position: relative;
        border-radius: 22px;

        img{
            border-radius: 22px;
            height: 100%;
            width: 100%;
            background-position: center top;
            background-size: cover;
        }

        /* .overlay{
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
        } */

    }

    /* .imgContainer:hover .overlay{
        height: 100%;
        width: 100%;
    }

    .imgContainer:hover .overlay p{
        opacity: 1;
    } */

    .dataContainer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 35%;

        .dataInfo{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            
            h2{
                color: ${props => props.theme.colors.textPrimary};
                font-size: ${props => props.theme.sizes.fontMedium};
                margin: 0;
                padding: 0;
                font-weight: bold;
            }
            
            p{
                display: flex;
                color: ${props => props.theme.colors.textSecondary};
                font-size: ${props => props.theme.sizes.fontBase};
                font-weight: bold;
                align-items: center;
                
                img{
                    width: ${props => props.theme.sizes.fontBase};
                    height: ${props => props.theme.sizes.fontBase};
                    margin-right:5px;
                }
            }
        }

        .btnLike{
            .likeIco{
                font-size: 25px;
                cursor: pointer;
                border-radius: 20px;
                transition: all 0.5s ease;

                &:hover{
                    background-color: #FFFFFF50;
                }
            }
        }
    }
`