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
import WarningMessage from "../../components/WarningMessage/WarningMessage";
import Filter from '../../components/Filter/Filter';
//img
import smile from '../../assets/img/smiley.svg';
import rickAndMortyHome from '../../assets/img/rickAndMortyHome.jpg';

const Home = () => {

    const dispatch = useDispatch();
    const pagNav = useSelector(state => state.pagesNavigation);

    useEffect(() => {
        dispatch(getChar('', '1'));
    }, [dispatch]);

    return (
        <ContainerHome rickAndMortyHome={rickAndMortyHome}>
            <WarningMessage />
            <div className="boxExplorer">
                <div className="boxInputs">        
                    <div className='search'>
                        <SearchBar />
                    </div>
                    <Filter/>
                </div>
            </div>
            <div className='containerTitle'>
                <img src={smile} alt="personajes" />
                <h2 className='title'>Personajes</h2>
            </div>
            <Cards />
            {pagNav > 1 && <Pagination />}
        </ContainerHome>
    )
}

export default Home;