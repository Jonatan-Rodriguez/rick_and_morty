import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { getChar } from "../../redux/action";
// Styled Components
import { ContainerHome, ContentWrapper, HeaderSection } from "./home.styled";
// Components
import Cards from "../../components/Cards/Cards";
import SearchBar from "../../components/SearchBar/SearchBar";
import Pagination from "../../components/Pagination/Pagination";

const Home = () => {
    const dispatch = useDispatch();
    const pagNav = useSelector(state => state.pagesNavigation);

    useEffect(() => {
        // Carga inicial
        dispatch(getChar({ numPag: 1 }));
    }, [dispatch]);

    return (
        <ContainerHome>
            {/* Navbar ya debería estar en tu App.js o Layout principal, no aquí dentro */}
            
            <ContentWrapper>
                {/* 1. TÍTULO Y SUBTÍTULO (Estilo limpio v0) */}
                <HeaderSection>
                    <h1>Personajes</h1>
                    <p>Explora la base de datos del multiverso</p>
                </HeaderSection>

                {/* 2. BARRA DE BÚSQUEDA + FILTROS (Ya integrados) */}
                {/* Ocupará el ancho disponible hasta su max-width definido */}
                <SearchBar />
                
                {/* 3. GRID DE CARTAS */}
                {/* Se expandirá automáticamente gracias a CSS Grid */}
                <Cards />

                {/* 4. PAGINACIÓN (Centrada al final) */}
                {pagNav > 1 && (
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                        <Pagination />
                    </div>
                )}
            </ContentWrapper>
        </ContainerHome>
    )
}

export default Home;