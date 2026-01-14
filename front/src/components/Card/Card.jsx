import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { addFav, removeFav } from "../../redux/action";
// Iconos
import { Heart, Trash2 } from "lucide-react";
// Estilos
import { 
  CardWrapper, 
  ImageContainer, 
  ActionsGroup, 
  ActionButton, 
  InfoContainer, 
  StatusRow, 
  StatusDot 
} from './card.styled';

function Card(props) {
    const { 
        id, name, status, species, origin, image, 
        myFavorites, addFav, removeFav, onClose 
    } = props;
    
    const [isFav, setIsFav] = useState(false);

    // Lógica de Favoritos (Sin cambios)
    useEffect(() => {
        myFavorites.forEach((fav) => {
            if (fav.id.toString() === id.toString()) {
                setIsFav(true);
            }
        });
    }, [myFavorites, id]);

    const handleFavorite = (e) => {
        e.preventDefault(); // Evita que el click dispare el Link
        if (isFav) {
            setIsFav(false);
            removeFav(id);
        } else {
            setIsFav(true);
            addFav({ id, name, status, species, origin, image });
        }
    };

    const handleClose = (e) => {
        e.preventDefault();
        onClose(id);
    }

    return (
        <CardWrapper>
            {/* GRUPO DE ACCIONES (Favorito / Eliminar) - Aparece en Hover */}
            <ActionsGroup className="actions-group">
                {/* Botón Favorito */}
                <ActionButton 
                    onClick={handleFavorite}
                    className={isFav ? "is-favorite" : ""}
                    aria-label="Toggle Favorite"
                >
                    <Heart size={18} />
                </ActionButton>

                {/* Botón Eliminar (Solo si existe la función onClose) */}
                {onClose && (
                    <ActionButton onClick={handleClose} aria-label="Delete">
                        <Trash2 size={18} />
                    </ActionButton>
                )}
            </ActionsGroup>

            {/* ENLACE AL DETALLE (Envuelve imagen e info) */}
            <Link to={`/detail/${id}`} style={{ textDecoration: 'none' }}>
                
                {/* IMAGEN */}
                <ImageContainer>
                    <img src={image} alt={name} className="character-image" />
                </ImageContainer>

                {/* INFORMACIÓN */}
                <InfoContainer>
                    <h3>{name}</h3>
                    <StatusRow>
                        <StatusDot $status={status} />
                        <span>{status} - {species}</span>
                    </StatusRow>
                </InfoContainer>
            </Link>
        </CardWrapper>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Card);