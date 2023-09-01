import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

const Nav = ({onSearch, logout})=>{
    return(
        <div>
            <SearchBar onSearch={onSearch}/>
            <button>
                <NavLink to='/about'>About</NavLink>
            </button>
            <button>
                <NavLink to='/home'>Home</NavLink>
            </button>
            <button onClick={logout}>Log out</button>
        </div>
    );
}

export default Nav;