//hooks
import { useDispatch } from "react-redux";
import { useState } from "react";
//action
import { getChar } from "../../redux/action";
//styled
import { ContainerSearch } from "./searBar.style";
//assets
import search from '../../assets/img/search.svg'

const SearchBar = () => {

   const [name,setName] = useState('');
   const dispatch = useDispatch();

   let handleChange = (event)=>{
      setName(event.target.value);
   }

   const searchChar = () => {
      dispatch(getChar(name));
   }

   return (
      <ContainerSearch>
            <div className="search">
                <input type="text" className="search__input" placeholder="Buscar" onChange={handleChange} value={name}/>
                {name.length > 0 && <button className="search__button" onClick={() => {setName('')}}>
                    X
                </button>}
                <button className="search__button" onClick={() => {searchChar()}}>
                    <img src={search} alt="search" className="search__icon" />
                </button>
            </div>
      </ContainerSearch>
   );
}

export default SearchBar;
