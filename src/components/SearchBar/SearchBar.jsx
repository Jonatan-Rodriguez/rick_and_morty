import { useState } from "react";
import { ContainerSearch } from "./searBar.style";
import search from '../../assets/img/search.svg'

export default function SearchBar({onSearch}) {
   const [id,setId] = useState('');

   let handleChange = (event)=>{
      setId(event.target.value)
   }
   return (
      <ContainerSearch>
            <div className="search">
                <input type="text" className="search__input" placeholder="Id de tu personaje" onChange={handleChange} value={id}/>
                <button className="search__button" onClick={() => {onSearch(id); setId('')}}>
                    <img src={search} className="search__icon" />
                </button>
            </div>
      </ContainerSearch>
   );
}
