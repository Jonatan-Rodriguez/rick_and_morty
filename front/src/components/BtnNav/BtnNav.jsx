import { ContainerBtnNav } from "./btnNav.styled";
import { NavLink } from "react-router-dom";

const BtnNav = ({img, alt, text, rute}) => {

    return(
        <>
            <NavLink to={rute}>
                <ContainerBtnNav>
                    <img className="ico" src={img} alt={alt}/>
                    <span>{text}</span>
                </ContainerBtnNav>
            </NavLink>
        </>
    )
}

export default BtnNav;