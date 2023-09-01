import { useState } from "react";
import validation from "./validation";

const Form = ({login}) => {

    const [userData, setUserData] = useState({email: '', password: ''});

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value});

        setErrors(validation({
            ...userData, [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">email:</label>
            <input type="email" placeholder="Ingrese su email" value={userData.email} name="email" onChange={handleChange}/>

            {errors.email && <p>{errors.email}</p>}

            <label htmlFor="password">password:</label>
            <input type="password" placeholder="Ingrese su password" value={userData.password} name="password" onChange={handleChange}/>

            {errors.password && <p>{errors.password}</p>}

            <button disabled={!userData.email || !userData.password || errors.email || errors.password} type="submit">Enviar</button>
        </form>
    );
}

export default Form;