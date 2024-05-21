//hook
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
//action
import { getChar } from "../../redux/action";
//style
import { ContainerHome } from "./home.styled";
//components
import Cards from "../../components/Cards/Cards";
import SearchBar from "../../components/SearchBar/SearchBar";
import Pagination from "../../components/Pagination/Pagination";
//assets
import logoHome from '../../assets/img/rickLogo.svg';
import smile from '../../assets/img/smiley.svg';

const Home = () => {

    const dispatch = useDispatch();
    const pagNav = useSelector(state => state.pagesNavigation);

    useEffect(() => {
       dispatch(getChar('','1'));
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
            {pagNav > 1 && <Pagination/>}
        </ContainerHome>
    )
}

export default Home;