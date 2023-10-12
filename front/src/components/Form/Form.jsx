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
                <LoginBox>
                    <form onSubmit={handleSubmit}>
                        <UserBox>
                            <InputStyled type="text" required value={userData.email} name="email" onChange={handleChange}/>
                            <LabelStyled htmlFor="email">Email</LabelStyled>
                            {errors.email && <div className="error"><p>{errors.email}</p></div>}
                        </UserBox>
                        <UserBox>
                            <InputStyled type="password" required value={userData.password} name="password" onChange={handleChange}/>
                            <LabelStyled htmlFor="password">Password</LabelStyled>
                            {errors.password && <div className="error"><p>{errors.password}</p></div>}
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