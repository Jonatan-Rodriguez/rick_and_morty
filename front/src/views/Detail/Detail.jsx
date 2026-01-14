import React, { useState, useEffect } from 'react';
import axios from "../../config/axiosConfig";
import { useParams, Link } from 'react-router-dom';
// Redux Hooks
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../../redux/action';
// Iconos
import { 
  ArrowLeft, 
  Heart, 
  MapPin, 
  Globe, 
  User, 
  Dna, 
  Activity, 
  Tv 
} from "lucide-react";
// Estilos
import {
  PageContainer,
  BackgroundBlur,
  ContentWrapper,
  BackButton,
  GlassCard,
  CardLayout,
  ImageSection,
  ImageWrapper,
  StyledImage,
  InfoSection,
  Header,
  NameTitle,
  EpisodeBadge,
  StatsGrid,
  StatRow,
  IconBox,
  StatContent,
  StatLabel,
  StatValue,
  StatusDot,
  FavoriteButton
} from './detail.styled';

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    // Obtenemos favoritos del estado global
    const myFavorites = useSelector(state => state.myFavorites);

    const [character, setCharacter] = useState({});
    const [isFav, setIsFav] = useState(false);

    console.log('Character Data:', character); // Debugging

    // 1. Cargar datos del personaje
    useEffect(() => {
        axios.get(`/character/${id}`)
            .then(({ data }) => {
                if (data.name) {
                    setCharacter(data);
                    console.log('Fetched Character:', data); // Debugging
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            })
            .catch(() => {
                window.alert('Error al cargar el personaje');
            });
        return () => setCharacter({});
    }, [id]);

    // 2. Verificar si ya es favorito (Igual que en Card.jsx)
    useEffect(() => {
        // Usamos .some() que es más eficiente para verificar existencia
        if (myFavorites) {
            const exists = myFavorites.some(fav => fav.id.toString() === id.toString());
            setIsFav(exists);
        }
    }, [myFavorites, id]);

    // 3. Manejador del botón Favoritos
    const handleFavorite = () => {
        if (isFav) {
            dispatch(removeFav(id)); // Usamos removeFav como en tu Card
            setIsFav(false);
        } else {
            // Enviamos todos los datos necesarios para la Card
            dispatch(addFav({
                id: character.id,
                name: character.name,
                status: character.status,
                species: character.species,
                origin: character.origin,
                image: character.image,
                gender: character.gender
            }));
            setIsFav(true);
        }
    };

    // Traductor de colores para el estado
    const getStatusColor = (status) => {
        switch(status) {
            case 'Alive': return '#22c55e'; // Verde
            case 'Dead': return '#ef4444';  // Rojo
            default: return '#9ca3af';      // Gris
        }
    };

    return (
        <PageContainer>
            {/* Fondo Blur */}
            {character.image && (
                <BackgroundBlur $imageUrl={character.image} />
            )}

            <ContentWrapper>
                <Link to="/home" style={{ textDecoration: 'none' }}>
                    <BackButton>
                        <ArrowLeft size={16} />
                        Volver al Inicio
                    </BackButton>
                </Link>

                <GlassCard>
                    <CardLayout>
                        {/* IMAGEN */}
                        <ImageSection>
                            <ImageWrapper>
                                <StyledImage 
                                    src={character.image || "https://rickandmortyapi.com/api/character/avatar/19.jpeg"} 
                                    alt={character.name} 
                                />
                            </ImageWrapper>
                        </ImageSection>

                        {/* INFORMACIÓN */}
                        <InfoSection>
                            <Header>
                                <NameTitle>{character.name}</NameTitle>
                                <EpisodeBadge>
                                    <Tv size={14} />
                                    {/* Corrección del contador de episodios */}
                                    {character.episode?.length || 0} Episodios
                                </EpisodeBadge>
                            </Header>

                            <StatsGrid>
                                {/* Estado */}
                                <StatRow>
                                    <IconBox>
                                        <Activity size={20} color="#60a5fa" />
                                    </IconBox>
                                    <StatContent>
                                        <StatLabel>Estado</StatLabel>
                                        <StatValue>
                                            <StatusDot $color={getStatusColor(character.status)} />
                                            {character.status}
                                        </StatValue>
                                    </StatContent>
                                </StatRow>

                                {/* Especie */}
                                <StatRow>
                                    <IconBox>
                                        <Dna size={20} color="#c084fc" />
                                    </IconBox>
                                    <StatContent>
                                        <StatLabel>Especie</StatLabel>
                                        <StatValue>{character.species}</StatValue>
                                    </StatContent>
                                </StatRow>

                                {/* Género */}
                                <StatRow>
                                    <IconBox>
                                        <User size={20} color="#f472b6" />
                                    </IconBox>
                                    <StatContent>
                                        <StatLabel>Género</StatLabel>
                                        <StatValue>{character.gender}</StatValue>
                                    </StatContent>
                                </StatRow>

                                {/* Origen */}
                                <StatRow>
                                    <IconBox>
                                        <Globe size={20} color="#34d399" />
                                    </IconBox>
                                    <StatContent>
                                        <StatLabel>Origen</StatLabel>
                                        <StatValue>{character.origin?.name}</StatValue>
                                    </StatContent>
                                </StatRow>

                                {/* Ubicación */}
                                <StatRow>
                                    <IconBox>
                                        <MapPin size={20} color="#fbbf24" />
                                    </IconBox>
                                    <StatContent>
                                        <StatLabel>Ubicación</StatLabel>
                                        <StatValue>{character.location?.name}</StatValue>
                                    </StatContent>
                                </StatRow>
                            </StatsGrid>

                            {/* BOTÓN FAVORITO DINÁMICO */}
                            <FavoriteButton onClick={handleFavorite} $isFav={isFav}>
                                <Heart 
                                    size={18} 
                                    fill={isFav ? "currentColor" : "none"} 
                                />
                                {isFav ? "Eliminar de Favoritos" : "Agregar a Favoritos"}
                            </FavoriteButton>
                        </InfoSection>
                    </CardLayout>
                </GlassCard>
            </ContentWrapper>
        </PageContainer>
    );
}

export default Detail;