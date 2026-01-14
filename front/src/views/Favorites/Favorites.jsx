import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFav } from '../../redux/action';

// Styled Components
import { 
  PageContainer, 
  ContentWrapper, 
  HeaderSection, 
  TitleGroup, 
  IconBox, 
  Title, 
  Subtitle, 
  FavoritesGrid 
} from './favorites.styled';

// Componentes
import Card from '../../components/Card/Card';
import EmptyStateFav from '../../components/EmpyStateFav/EmptyStateFav';

// Iconos
import { Heart } from 'lucide-react';

const Favorites = () => {
    const dispatch = useDispatch();
    const myFavorites = useSelector(state => state.myFavorites);

    useEffect(() => {
        dispatch(getFav());
    }, [dispatch]);

    return (
        <PageContainer>
            {/* Aquí iría el Navbar si corresponde */}

            <ContentWrapper>
                {/* 1. ENCABEZADO (Traducido) */}
                <HeaderSection>
                    <TitleGroup>
                        <IconBox>
                            <Heart size={24} />
                        </IconBox>
                        <Title>Personajes Favoritos</Title>
                    </TitleGroup>
                    <Subtitle>
                        Tu colección personal de todo el multiverso. <b>{"Haz clic en el corazón para eliminarlo."}</b>
                    </Subtitle>
                </HeaderSection>

                {/* 2. CONTENIDO: Grid o Empty State */}
                {myFavorites && myFavorites.length > 0 ? (
                    <FavoritesGrid>
                        {myFavorites.map(fav => (
                            <Card
                                key={fav.id}
                                id={fav.id}
                                name={fav.name}
                                status={fav.status}
                                species={fav.species}
                                origin={fav.origin}
                                image={fav.image}
                            />
                        ))}
                    </FavoritesGrid>
                ) : (
                    <EmptyStateFav />
                )}
            </ContentWrapper>
        </PageContainer>
    );
}

export default Favorites;