import React, { useState, useEffect, useCallback } from 'react';
import axios from "../../config/axiosConfig";
import { useParams, Link, useNavigate } from 'react-router-dom'; // <--- Importamos useNavigate
// Redux Hooks
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../../redux/action';
// components
import EditModal from '../../components/EditModal/EditModal';
import FeedbackModal from '../../components/FeedbackModal/FeedbackModal'; // <--- Importamos el FeedbackModal
// Iconos
import { 
  ArrowLeft, 
  Heart, 
  MapPin, 
  Globe, 
  User, 
  Dna, 
  Activity, 
  Tv,
  Pencil
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
  FavoriteButton,
  EditDetailButton
} from './detail.styled';

const Detail = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // Hook para redirección
    const dispatch = useDispatch();
    
    const myFavorites = useSelector(state => state.myFavorites);

    const [character, setCharacter] = useState({});
    const [isFav, setIsFav] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    // Estado para controlar el Feedback (Errores de carga)
    const [feedback, setFeedback] = useState({
        isOpen: false,
        type: 'error', 
        title: '',
        message: ''
    });

    const isCreatedCharacter = isNaN(id);

    // Memorizamos la función con useCallback
    const fetchCharacter = useCallback(() => {
        axios.get(`/character/${id}`)
            .then(({ data }) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    // Reemplazo de alert por Modal
                    setFeedback({
                        isOpen: true,
                        type: 'error',
                        title: 'Personaje no encontrado',
                        message: 'La pistola de portales no encuentra este destino. Es probable que este personaje haya sido borrado de la línea temporal o nunca existió en este universo.'
                    });
                }
            })
            .catch(() => {
                // Reemplazo de alert por Modal
                setFeedback({
                    isOpen: true,
                    type: 'error',
                    title: 'Error de Conexión',
                    message: 'Parece que Jerry tocó algo que no debía. Hubo un problema al cargar la información. Inténtalo de nuevo más tarde.'
                });
            });
    }, [id]);

    useEffect(() => {
        fetchCharacter();
        return () => setCharacter({});
    }, [fetchCharacter]);

    useEffect(() => {
        if (myFavorites) {
            const exists = myFavorites.some(fav => fav.id.toString() === id.toString());
            setIsFav(exists);
        }
    }, [myFavorites, id]);

    const handleFavorite = () => {
        if (isFav) {
            dispatch(removeFav(id));
            setIsFav(false);
        } else {
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

    const handleEditClose = () => {
        setShowEdit(false);
        fetchCharacter(); 
    };

    // Manejador para cerrar el Modal de Error
    const handleCloseFeedback = () => {
        setFeedback({ ...feedback, isOpen: false });
        // Si falló la carga, es mejor sacar al usuario de esta pantalla rota
        navigate('/home');
    };

    const getStatusColor = (status) => {
        switch(status) {
            case 'Alive': return '#22c55e';
            case 'Dead': return '#ef4444';
            default: return '#9ca3af';
        }
    };

    return (
        <PageContainer>
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
                        <ImageSection>
                            <ImageWrapper>
                                <StyledImage 
                                    src={character.image || "https://rickandmortyapi.com/api/character/avatar/19.jpeg"} 
                                    alt={character.name} 
                                />
                            </ImageWrapper>
                        </ImageSection>

                        <InfoSection>
                            <Header>
                                <NameTitle>{character.name}</NameTitle>
                                <EpisodeBadge>
                                    <Tv size={14} />
                                    {character.episode?.length || 0} Episodios
                                </EpisodeBadge>
                            </Header>

                            <StatsGrid>
                                <StatRow>
                                    <IconBox><Activity size={20} color="#60a5fa" /></IconBox>
                                    <StatContent>
                                        <StatLabel>Estado</StatLabel>
                                        <StatValue>
                                            <StatusDot $color={getStatusColor(character.status)} />
                                            {character.status}
                                        </StatValue>
                                    </StatContent>
                                </StatRow>

                                <StatRow>
                                    <IconBox><Dna size={20} color="#c084fc" /></IconBox>
                                    <StatContent>
                                        <StatLabel>Especie</StatLabel>
                                        <StatValue>{character.species}</StatValue>
                                    </StatContent>
                                </StatRow>

                                <StatRow>
                                    <IconBox><User size={20} color="#f472b6" /></IconBox>
                                    <StatContent>
                                        <StatLabel>Género</StatLabel>
                                        <StatValue>{character.gender}</StatValue>
                                    </StatContent>
                                </StatRow>

                                <StatRow>
                                    <IconBox><Globe size={20} color="#34d399" /></IconBox>
                                    <StatContent>
                                        <StatLabel>Origen</StatLabel>
                                        <StatValue>{character.origin?.name || character.origin}</StatValue>
                                    </StatContent>
                                </StatRow>

                                <StatRow>
                                    <IconBox><MapPin size={20} color="#fbbf24" /></IconBox>
                                    <StatContent>
                                        <StatLabel>Ubicación</StatLabel>
                                        <StatValue>{character.location?.name || "Desconocida"}</StatValue>
                                    </StatContent>
                                </StatRow>
                            </StatsGrid>

                            <FavoriteButton onClick={handleFavorite} $isFav={isFav}>
                                <Heart size={18} fill={isFav ? "currentColor" : "none"} />
                                {isFav ? "Eliminar de Favoritos" : "Agregar a Favoritos"}
                            </FavoriteButton>

                            {isCreatedCharacter && (
                                <EditDetailButton onClick={() => setShowEdit(true)}>
                                    <Pencil size={18} />
                                    Editar Personaje
                                </EditDetailButton>
                            )}
                        </InfoSection>
                    </CardLayout>
                </GlassCard>
            </ContentWrapper>

            {/* Modal de Edición */}
            {showEdit && (
                <EditModal 
                    char={character}
                    onClose={handleEditClose}
                />
            )}

            {/* Modal de Feedback (Errores de carga) */}
            <FeedbackModal 
                isOpen={feedback.isOpen}
                type={feedback.type}
                title={feedback.title}
                message={feedback.message}
                onClose={handleCloseFeedback}
            />
        </PageContainer>
    );
}

export default Detail;