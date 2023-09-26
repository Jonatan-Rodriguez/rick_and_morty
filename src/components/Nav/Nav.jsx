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
                <div className="navIco">
                    <NavLink to='/about'>
                        <img className="ico" src={about} alt="about"/>
                    </NavLink>
                </div>
                <div className="navIco">
                    <NavLink to="/favorites">
                        <img className="ico" src={fav} alt="favoritos"/>
                    </NavLink>
                </div>
                <div className="navIco" onClick={logout}>
                    <img className="ico" src={logOut} alt="Log out" />
                </div>
            </div>
        </NavContainer>
    );
}

export default Nav;