import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { getChar } from "../../redux/action";
// Styled Components
import { 
    ContainerHome, 
    ContentWrapper, 
    HeaderSection,
    SectionTitle,
    Divider
} from "./home.styled";
// Components
import Cards from "../../components/Cards/Cards";
import SearchBar from "../../components/SearchBar/SearchBar";
import Pagination from "../../components/Pagination/Pagination";

const Home = () => {
    const dispatch = useDispatch();
    
    // CORRECCIÓN 1: Traemos 'currentPage' del estado, NO 'pagesNavigation'
    // pagesNavigation es el total (ej: 42), currentPage es donde estás parado (ej: 1)
    const { characters, loading, noResults, currentPage } = useSelector(state => state);

    useEffect(() => {
        dispatch(getChar({ numPag: 1 }));
    }, [dispatch]);

    // Filtrado
    const myCreations = characters.filter(char => char.createdInDb || isNaN(char.id));
    const apiCharacters = characters.filter(char => !char.createdInDb && !isNaN(char.id));

    return (
        <ContainerHome>
            <ContentWrapper>
                <HeaderSection>
                    <h1>Portal Dimensional</h1>
                    <p>Explora la base de datos del multiverso</p>
                </HeaderSection>
                
                <SearchBar />

                {!loading && !noResults && currentPage === 1 && myCreations.length > 0 && (
                    <>
                        <SectionTitle>Personajes Creados</SectionTitle>
                        <Cards characters={myCreations} loading={false} />
                        <Divider />
                    </>
                )}

                {!loading && !noResults && (
                   <SectionTitle>
                       {"Base de Datos Rick & Morty"}
                   </SectionTitle>
                )}

                <Cards 
                    characters={apiCharacters} 
                    loading={loading} 
                    noResults={noResults} 
                />

                {!loading && !noResults && (
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                        <Pagination />
                    </div>
                )}
            </ContentWrapper>
        </ContainerHome>
    )
}

export default Home;