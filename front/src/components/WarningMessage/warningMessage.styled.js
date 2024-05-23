import styled from 'styled-components';

export const ContainerWarningMessage = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-around;
    flex-direction: row;
    color: white;
    background-color: #fcbf4950;
    border-radius: 20px;
    padding: 10px 15px;
    border: 1px solid #fcbf49;
    width: 100%;

    .btnDel{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        font-size: 2.3em;
        width: 30px;
        height: 30px;
        cursor: pointer;
        transition: all 0.5s ease;
        
        &:hover{
            background-color: #d62828;
        }
    }

    details{
        width: 100%;
        transition: all 0.5s ease;
        summary{
            width: 100%;
            cursor: pointer;
            font-size: 2.3em;
        }
        p{
            font-size: 1.6em;
        }
    }
    details[open] summary{
        border-bottom: 1px solid #aaa;
        animation: expand 0.5s ease-in-out forwards;

        p{
            animation: expand 0.5s ease-in-out;
        }
    }

    @keyframes expand {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`