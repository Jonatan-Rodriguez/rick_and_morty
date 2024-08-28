import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    min-width: 200px;
    height: 350px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 30px;
    padding: 8px;
    gap: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    .imgContainer {
        width: 100%;
        height: 65%;
        position: relative;
        border-radius: 22px;
        overflow: hidden;

        img {
            border-radius: 22px;
            height: 100%;
            width: 100%;
            background-position: center top;
            background-size: cover;
            transition: transform 0.3s ease;
        }

        &:hover img {
            transform: scale(1.1);
        }
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
    }

    .dataContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 35%;

        .dataInfo {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            
            h2 {
                color: ${props => props.theme.colors.textPrimary};
                font-size: ${props => props.theme.sizes.fontMedium};
                margin: 0;
                padding: 0;
                font-weight: bold;
            }
            
            p {
                display: flex;
                color: ${props => props.theme.colors.textSecondary};
                font-size: ${props => props.theme.sizes.fontBase};
                font-weight: bold;
                align-items: center;
                
                img {
                    width: ${props => props.theme.sizes.fontBase};
                    height: ${props => props.theme.sizes.fontBase};
                    margin-right: 5px;
                }
            }
        }

        .btnLike {
        position: relative; 

        .likeIco {
            font-size: 25px;
            cursor: pointer;
            border-radius: 20px;
            position: relative; 
            z-index: 1; 
            transition: color 0.3s ease; 

            &:before {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 40px;
                height: 40px;
                background-color: rgba(220, 53, 69, 0.3); 
                border-radius: 50%;
                transform: translate(-50%, -50%) scale(0); 
                z-index: 0; 
                transition: transform 0.3s ease, opacity 0.3s ease; 
                opacity: 0; 
            }

            &:hover::before {
                opacity: 1; 
                transform: translate(-50%, -50%) scale(1); 
            }

            &:hover {
                color: #FFF;
            }
        }
    }
    }
    
`;
