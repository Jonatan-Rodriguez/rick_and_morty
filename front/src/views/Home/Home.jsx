//hook
import { useDispatch } from "react-redux";
import { useEffect } from "react";
//action
import { getChar } from "../../redux/action";
//style
import { ContainerHome } from "./home.styled";
//components
import Cards from "../../components/Cards/Cards";
import SearchBar from "../../components/SearchBar/SearchBar";
//assets
import logoHome from '../../assets/img/rickLogo.svg';
import smile from '../../assets/img/smiley.svg';

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getChar(''));
    }, [dispatch]);

    return (
        <ContainerHome>
            <div className='logoHome'>
                <img src={logoHome} alt="logo rick and morty" className='logo' />
            </div>
            <div className='search'>
                <SearchBar/>
            </div>
            <div className='containerTitle'>
                <img src={smile} alt="personajes" />
                <h2 className='title'>Personajes</h2>
            </div>
            <Cards/>
        </ContainerHome>
    )
}

export default Home;