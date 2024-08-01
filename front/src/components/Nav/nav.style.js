import styled from "styled-components";

export const NavContainer = styled.div`
    height: auto;
    width: 100%;
    background-color:${props => props.theme.colors.primary};
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo{

    }

    
    .pages{
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: 30px;

        p{
            font-size: ${props => props.theme.sizes.fontBase};
            color: ${props => props.theme.colors.textPrimary};
            text-align: center;
            font-weight: bold;
            cursor: pointer;
        }
    }

    .btnLogIn{
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 10px;
        
        p{
            font-size: ${props => props.theme.sizes.fontBase};
            color: ${props => props.theme.colors.textPrimary};
            text-align: center;
            font-weight: bold;
            cursor: pointer;
        }

        .navBtn{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            flex-direction: row;
    
            .navIco{
                cursor: pointer;
                border-radius: 20px;
    
                .ico{
                    width: 32px;
                    height: 32px;
                }
            }
        }
    }

`