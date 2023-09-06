import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

const Nav = ({onSearch, logout, randomize})=>{
    return(
        <div>
            <SearchBar onSearch={onSearch}/>
            <button onClick={randomize}>ADD RANDOM</button>
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
    );
}

export default Nav;