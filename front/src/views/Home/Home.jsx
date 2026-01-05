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
import Filters from "../../components/Filters/Filters";
//assets
import logoHome from '../../assets/img/rickLogo.svg';
import smile from '../../assets/img/smiley.svg';

const Home = () => {

    const dispatch = useDispatch();
    const pagNav = useSelector(state => state.pagesNavigation);

    useEffect(() => {
        // CORRECCIÓN IMPORTANTE:
        // Ahora getChar espera un OBJETO, no strings sueltos.
        dispatch(getChar({ numPag: 1 }));
    }, [dispatch]);

    return (
        <ContainerHome>
            <div className='logoHome'>
                <img src={logoHome} alt="logo rick and morty" className='logo' />
            </div>
            <div className='search'>
                <SearchBar />
            </div>
            
            {/* Filtros Profesionales */}
            <Filters />
            
            <div className='containerTitle'>
                <img src={smile} alt="personajes" />
                <h2 className='title'>Personajes</h2>
            </div>
            
            <Cards />

            {/* CORRECCIÓN: Dejamos solo una condición limpia.
                Si hay más de 1 página, mostramos el componente. */}
            {pagNav > 1 && <Pagination />}
            
        </ContainerHome>
    )
}

export default Home;