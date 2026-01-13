import React from 'react';
import { StyledLink } from "./btnNav.styled";

const BtnNav = ({ Icon, text, rute, onClick, className }) => {
    return(
        <StyledLink to={rute} onClick={onClick} className={className}>
            {/* Renderizamos el componente del Icono directamente */}
            <Icon className="ico" />
            <span>{text}</span>
        </StyledLink>
    )
}

export default BtnNav;