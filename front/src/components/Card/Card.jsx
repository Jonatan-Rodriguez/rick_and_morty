import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { addFav, removeFav } from "../../redux/action";
// Iconos
import { Heart, Trash2, Pencil } from "lucide-react"; // Importamos Pencil
// Componente Modal
import EditModal from "../EditModal/EditModal"; 

// Estilos
import { 
  CardWrapper, 
  ImageContainer, 
  ActionsGroup, 
  ActionButton, 
  EditButton, // Importamos el nuevo estilo
  InfoContainer, 
  StatusRow, 
  StatusDot 
} from './card.styled';

function Card(props) {
    const { 
        id, name, status, species, origin, image, gender, // Agregamos gender si lo necesitamos para el edit
        myFavorites, addFav, removeFav, onClose 
    } = props;
    
    const [isFav, setIsFav] = useState(false);
    const [showEdit, setShowEdit] = useState(false); // Estado para abrir modal

    // Determinamos si es editable: Si tiene onClose (significa que estamos en MyCreations) 
    // O si el ID no es un número (la API usa números, la DB usa UUIDs)
    const isEditable = isNaN(id); 

    useEffect(() => {
        myFavorites.forEach((fav) => {
            if (fav.id.toString() === id.toString()) {
                setIsFav(true);
            }
        });
    }, [myFavorites, id]);

    const handleFavorite = (e) => {
        e.preventDefault();
        if (isFav) {
            setIsFav(false);
            removeFav(id);
        } else {
            setIsFav(true);
            addFav({ id, name, status, species, origin, image, gender });
        }
    };

    const handleClose = (e) => {
        e.preventDefault();
        onClose(id);
    }

    const handleEditClick = (e) => {
        e.preventDefault(); // Evitamos ir al detalle
        setShowEdit(true);
    }

    return (
        <>
            <CardWrapper>
                <ActionsGroup className="actions-group">
                    {/* Botón Favorito */}
                    <ActionButton 
                        onClick={handleFavorite}
                        className={isFav ? "is-favorite" : ""}
                        aria-label="Toggle Favorite"
                    >
                        <Heart size={18} />
                    </ActionButton>

                    {/* BOTÓN EDITAR (Solo si es editable) */}
                    {isEditable && (
                        <EditButton onClick={handleEditClick} aria-label="Edit">
                            <Pencil size={18} />
                        </EditButton>
                    )}

                    {/* Botón Eliminar */}
                    {onClose && (
                        <ActionButton onClick={handleClose} aria-label="Delete">
                            <Trash2 size={18} />
                        </ActionButton>
                    )}
                </ActionsGroup>

                <Link to={`/detail/${id}`} style={{ textDecoration: 'none' }}>
                    <ImageContainer>
                        <img src={image} alt={name} className="character-image" />
                    </ImageContainer>

                    <InfoContainer>
                        <h3>{name}</h3>
                        <StatusRow>
                            <StatusDot $status={status} />
                            <span>{status} - {species}</span>
                        </StatusRow>
                    </InfoContainer>
                </Link>
            </CardWrapper>

            {/* Renderizado condicional del Modal de Edición */}
            {showEdit && (
                <EditModal 
                    char={{ id, name, status, species, origin, image, gender }} 
                    onClose={() => setShowEdit(false)} 
                />
            )}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFav: (character) => dispatch(addFav(character)),
        removeFav: (id) => dispatch(removeFav(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);