import { NavLink } from "react-router-dom";
import {NavContainer} from "./nav.style.js";
import logo from '../../assets/img/logo.svg';
import logOut from '../../assets/img/logOut.svg';
import fav from '../../assets/img/favoritos.svg';
import about from '../../assets/img/info.svg';

const Nav = ({onSearch, logout, randomize})=>{
    return(
        <NavContainer>
            <div className="logo">
                <NavLink to='/home'>
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>
            <div className="navBtn">
                <div className="aboutIco">
                    <NavLink to='/about'>
                        <img src={about} alt="about"/>
                    </NavLink>
                </div>
                <div className="favIco">
                    <NavLink to="/favorites">
                        <img src={fav} alt="favoritos"/>
                    </NavLink>
                </div>
                <div className="logOutIco" onClick={logout}>
                    <img src={logOut} alt="Log out" />
                </div>
            </div>
        </NavContainer>
    );
}

export default Nav;