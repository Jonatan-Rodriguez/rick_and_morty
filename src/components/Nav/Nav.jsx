import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import {NavContainer} from "./nav.style.js"

const Nav = ({onSearch, logout, randomize})=>{
    return(
        <NavContainer>
            
            <div>
                <SearchBar onSearch={onSearch}/>
                <button onClick={randomize}>RANDOM</button>
                <button>
                    <NavLink to='/about'>About</NavLink>
                </button>
                <button>
                    <NavLink to='/home'>Home</NavLink>
                </button>
                <button>
                    <NavLink to="/favorites">Favorites</NavLink>
                </button>
                <button onClick={logout}>Log out</button>
            </div>
        </NavContainer>
    );
}

export default Nav;