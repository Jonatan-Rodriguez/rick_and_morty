import styled from "styled-components";

export const ContainerBtnNav = styled.div`
    height: 35px;
    cursor: pointer;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
    background-color: #FFFFFF30;
    padding: 6px 12px;
    font-size: 1.9em;
    color: white;
    transition: all 0.5s ease;

    &:hover{
        background-color: #FFFFFF50;
    }

    .ico{
        width: 27px;
        height: 27px;
    }
`