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
  EditText,
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [idToDelete, setIdToDelete] = useState(null);

    useEffect(() => {
        dispatch(getChar()); 
    }, [dispatch]);

    const handleDeleteClick = (id) => {
        setIdToDelete(id);
        setIsModalOpen(true);
    };

    const handleConfirmDelete = () => {
        if (idToDelete) {
            dispatch(deleteChar(idToDelete));
            setIsModalOpen(false);
            setIdToDelete(null);
        }
    };

    const handleCancelDelete = () => {
        setIsModalOpen(false);
        setIdToDelete(null);
    };

    return (
        <PageContainer>
            <ContentWrapper>
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
                            <>
                            <EditText>
                                Haz clic en el ícono del lápiz para editar,
                            </EditText>
                            <DestructiveText>o en el ícono de la papelera para eliminar.
                            </DestructiveText>
                            </>
                        )}
                    </Subtitle>
                </HeaderSection>

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
                                onClose={() => handleDeleteClick(char.id)}
                                allowEdit={true}
                            />
                        ))}
                    </CreationsGrid>
                )}
            </ContentWrapper>

            <DeleteModal 
                isOpen={isModalOpen}
                onClose={handleCancelDelete}
                onConfirm={handleConfirmDelete}
            />
        </PageContainer>
    );
};

export default MyCreations;