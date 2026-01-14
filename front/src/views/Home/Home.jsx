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
        dispatch(getChar({ numPag: 1 }));
    }, [dispatch]);

    return (
        <ContainerHome>
            <ContentWrapper>
                <HeaderSection>
                    <h1>Personajes</h1>
                    <p>Explora la base de datos del multiverso</p>
                </HeaderSection>
                <SearchBar />
                <Cards />
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