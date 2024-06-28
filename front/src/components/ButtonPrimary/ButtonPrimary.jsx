import { ButtonPrimaryStyled } from "./buttonPrimary.styled";

const ButtonPrimary = ({name}) => {
    return(
        <ButtonPrimaryStyled>
            <div className="wrapper">
                <span>{name}</span>
                <div className="circle circle-5"></div>
                <div className="circle circle-4"></div>
                <div className="circle circle-3"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-1"></div>
            </div>
        </ButtonPrimaryStyled>
    )
}

export default ButtonPrimary;