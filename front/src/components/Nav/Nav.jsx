import { NavLink } from "react-router-dom";
//components
import { NavContainer } from "./nav.style.js";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary.jsx";
//img
import logo from '../../assets/img/logo.svg';
import fav from '../../assets/img/favoritos.svg';

const Nav = () => {
    return (
        <NavContainer>
            <div className="logo">
                <NavLink to='/home'>
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>
            <div className="pages">
                <NavLink to='/about'>
                    <p>About</p>
                </NavLink>
                <NavLink to='/home'>
                    <p>Home</p>
                </NavLink>
                <NavLink to='/'>
                    <p>Creaciones</p>
                </NavLink>
            </div>
            <div className="btnLogIn">
                <p>REGISTRATE</p>
                <ButtonSecondary name='Ingresar' />
                
            </div>
        </NavContainer>
    );
}

export default Nav;