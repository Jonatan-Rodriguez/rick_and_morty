import styled from 'styled-components';

export const CreateContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    color: white;
`;

export const CreateForm = styled.form`
    background-color: rgba(0, 0, 0, 0.7);
    padding: 40px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 400px;
    border: 1px solid #00ff00; /* Verde Rick */
    box-shadow: 0 0 15px #00ff00;

    /* Estilos anidados para inputs y selects dentro del formulario */
    input, select {
        padding: 10px;
        border-radius: 5px;
        border: none;
        outline: none;
        font-family: inherit;
    }

    label {
        font-weight: bold;
        margin-bottom: 2px;
    }
`;

export const ButtonSubmit = styled.button`
    margin-top: 20px;
    padding: 10px;
    background-color: #00ff00;
    color: black;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    font-family: inherit;

    &:hover {
        background-color: #00cc00;
        transform: scale(1.05);
    }
`;