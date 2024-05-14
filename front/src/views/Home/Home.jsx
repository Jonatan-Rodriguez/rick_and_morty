import { ContainerHome } from "./home.styled";
import Cards from "../../components/Cards/Cards";
import SearchBar from "../../components/SearchBar/SearchBar";
import logoHome from '../../assets/img/rickLogo.svg';
import smile from '../../assets/img/smiley.svg';
import dado from '../../assets/img/dado.svg';

const Home = (props) => {

    return(
        <ContainerHome>
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
            <Cards onClose= {props.onClose} characters= {props.characters}/>
        </ContainerHome>
    )
}

export default Home;