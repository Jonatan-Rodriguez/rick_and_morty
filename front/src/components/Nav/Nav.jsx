import { NavLink } from "react-router-dom";
//components
import { NavContainer } from "./nav.style.js";
import BtnNav from "../BtnNav/BtnNav.jsx";
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
            <div className="navBtn">
                <BtnNav img={fav} alt="favoritos" text="Favoritos" rute="/favorites" />
            </div>
            <div className="navBtn">
                <BtnNav img={fav} alt="Crear personaje" text="Crear Personaje" rute="/create" />
            </div>
        </NavContainer>
    );
}

export default Nav;