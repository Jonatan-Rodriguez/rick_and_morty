import styled from "styled-components";

export const NavContainer = styled.div`
    height: auto;
    width: 100%;
    background-color: black;
    padding: 0 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .logo{

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
`