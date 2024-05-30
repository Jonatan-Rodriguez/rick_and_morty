//hooks
import { useDispatch } from "react-redux";
import { useState } from "react";
//action
import { getChar, SearchName } from "../../redux/action";
//styled
import { ContainerSearch } from "./searchBar.style";
//assets
import search from '../../assets/img/search.svg';

const SearchBar = () => {

   const [name, setName] = useState('');
   const dispatch = useDispatch();

   const handleChange = (event) => {
      setName(event.target.value);
   }

   const searchChar = () => {
      dispatch(SearchName(name));
      dispatch(getChar(name, '1'));
   }

   const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
         searchChar();
      }
   }

   const btnRemove = () => {
      setName('');
      dispatch(SearchName(''));
      dispatch(getChar('', '1'));
   }

   return (
      <ContainerSearch>
         <div className="input">
            <input
               type="text"
               className="search__input"
               placeholder="Buscar"
               onChange={handleChange}
               onKeyDown={handleKeyDown}
               value={name}
            />
         </div>
         <div className="buttons">
            {name.length > 0 && (
               <button className="clean__button" onClick={btnRemove}>
                  X
               </button>
            )}
            <button className="search__button" onClick={searchChar}>
               <img src={search} alt="search" className="search__icon" />
            </button>
         </div>
      </ContainerSearch>
   );
}

export default SearchBar;