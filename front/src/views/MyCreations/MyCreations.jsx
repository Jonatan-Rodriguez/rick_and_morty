import React, { useEffect, useState } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { getChar, deleteChar } from "../../redux/action";
// Styled Components
import { 
  PageContainer, 
  ContentWrapper, 
  HeaderSection, 
  TitleGroup, 
  IconBox, 
  Title, 
  Subtitle, 
  DestructiveText,
  CreationsGrid
} from "./myCreations.styled";
// Components
import Card from "../../components/Card/Card";
import EmptyStateCreations from "../../components/EmptyStateCreations/EmptyStateCreations";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
// Icons
import { User } from "lucide-react";

const MyCreations = () => {
    const dispatch = useDispatch();
    const allCharacters = useSelector(state => state.allCharacters);
    const myCharacters = allCharacters.filter(char => char.createdInDb);

    // Estados para el Modal de eliminación
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [idToDelete, setIdToDelete] = useState(null);

    useEffect(() => {
        dispatch(getChar()); 
    }, [dispatch]);

    // 1. Al hacer click en la papelera de la carta, abrimos el modal
    const handleDeleteClick = (id) => {
        setIdToDelete(id);
        setIsModalOpen(true);
    };

    // 2. Si el usuario confirma en el modal
    const handleConfirmDelete = () => {
        if (idToDelete) {
            dispatch(deleteChar(idToDelete));
            setIsModalOpen(false);
            setIdToDelete(null);
        }
    };

    // 3. Si el usuario cancela
    const handleCancelDelete = () => {
        setIsModalOpen(false);
        setIdToDelete(null);
    };

    return (
        <PageContainer>
            <ContentWrapper>
                {/* Header */}
                <HeaderSection>
                    <TitleGroup>
                        <IconBox>
                            <User size={24} />
                        </IconBox>
                        <Title>Mis Creaciones</Title>
                    </TitleGroup>
                    
                    <Subtitle>
                        Personajes que has agregado a la base de datos de la Ciudadela.
                        {myCharacters.length > 0 && (
                            <DestructiveText>
                                Haz clic en el ícono de la papelera para eliminar.
                            </DestructiveText>
                        )}
                    </Subtitle>
                </HeaderSection>

                {/* Contenido */}
                {myCharacters.length === 0 ? (
                    <EmptyStateCreations />
                ) : (
                    <CreationsGrid>
                        {myCharacters.map(char => (
                            <Card
                                key={char.id}
                                id={char.id}
                                name={char.name}
                                species={char.species}
                                gender={char.gender}
                                image={char.image}
                                origin={char.origin?.name}
                                status={char.status}
                                // Aquí pasamos la función que abre el modal
                                onClose={() => handleDeleteClick(char.id)} 
                            />
                        ))}
                    </CreationsGrid>
                )}
            </ContentWrapper>

            {/* Modal de Eliminación (Siempre renderizado, controlado por isModalOpen) */}
            <DeleteModal 
                isOpen={isModalOpen}
                onClose={handleCancelDelete}
                onConfirm={handleConfirmDelete}
            />
        </PageContainer>
    );
};

export default MyCreations;