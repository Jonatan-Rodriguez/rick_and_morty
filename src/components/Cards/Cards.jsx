import Card from '../Card/Card';
import { ContainerCards } from './cards.style';
import SearchBar from '../SearchBar/SearchBar';
import dado from '../../assets/img/dado.svg';
import logoHome from '../../assets/img/rickLogo.svg';
import smile from '../../assets/img/smiley.svg'

export default function Cards(props) {
   return (
      <ContainerCards>
         <div className='logoHome'>
            <img src={logoHome} alt="logo rick and morty" className='logo'/>
         </div>
         <div className='search'>
            <SearchBar onSearch={props.onSearch}/>
            <button className="btnRandom" onClick={props.randomize}>
               <img className='icon' src={dado}/>
               <span className="text">Random</span>
            </button>
         </div>
         <div className='containerTitle'>
            <img src={smile} alt="personajes" />
            <h2 className='title'>Personajes</h2>
         </div>
         <div className='cards'>
         {props.characters.map(element => {
            return (
            <Card
               key={element.id}
               id={element.id}
               name={element.name}
               status={element.status}
               species={element.species}
               gender={element.gender}
               origin={element.origin.name}
               image={element.image}
               onClose={props.onClose}
            />
            )})
         }
      </div>
   </ContainerCards>
   );
}
