import { useState } from "react";
import validation from "./validation";
import { DivContainer, DivContainerForm, DivContainerImg, LoginBox, UserBox, InputStyled, LabelStyled, LinkStyled, SpanStyled} from "./form.style";
import rick from '../../assets/img/rick.svg'
import rickLogo from '../../assets/img/rickLogo.svg'

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
        <DivContainer>
            <DivContainerForm>
                <img src={rickLogo} alt="" />
                {/* <Form onSubmit={handleSubmit}>
                    <label htmlFor="email">email:</label>
                    <input type="email" placeholder="Ingrese su email" value={userData.email} name="email" onChange={handleChange}/>

                    {errors.email && <p>{errors.email}</p>}

                    <label htmlFor="password">password:</label>
                    <input type="password" placeholder="Ingrese su password" value={userData.password} name="password" onChange={handleChange}/>

                    {errors.password && <p>{errors.password}</p>}

                    <button disabled={!userData.email || !userData.password || errors.email || errors.password} type="submit">Enviar</button>
                </Form> */}

                <LoginBox>
                    <form onSubmit={handleSubmit}>
                        <UserBox>
                            <InputStyled type="text" required value={userData.email} name="email" onChange={handleChange}/>
                            <LabelStyled htmlFor="email">Email</LabelStyled>
                            {errors.email && <p>{errors.email}</p>}
                        </UserBox>
                        <UserBox>
                            <InputStyled type="password" required value={userData.password} name="password" onChange={handleChange}/>
                            <LabelStyled htmlFor="password">Password</LabelStyled>
                            {errors.password && <p>{errors.password}</p>}
                        </UserBox>
                        <center>
                            <LinkStyled onClick={handleSubmit}>Enviar
                                <SpanStyled></SpanStyled>
                            </LinkStyled>
                        </center>
                    </form>
                </LoginBox> 

            </DivContainerForm>
            <DivContainerImg src={rick}/>
        </DivContainer>
    );
}

export default Form;