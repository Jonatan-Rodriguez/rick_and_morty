import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { addFav, removeFav } from "../../redux/action";
import { Heart, Trash2, Pencil } from "lucide-react";
import EditModal from "../EditModal/EditModal"; 
import { 
  CardWrapper, 
  ImageContainer, 
  ActionsGroup, 
  ActionButton, 
  EditButton, 
  InfoContainer, 
  StatusRow, 
  StatusDot 
} from './card.styled';

function Card(props) {
    const { 
        id, name, status, species, origin, image, gender,
        myFavorites, addFav, removeFav, onClose, 
        allowEdit
    } = props;
    
    const [isFav, setIsFav] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const isEditable = allowEdit && isNaN(id); 

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
        e.preventDefault();
        setShowEdit(true);
    }

    return (
        <>
            <CardWrapper>
                <ActionsGroup className="actions-group">
                    <ActionButton 
                        onClick={handleFavorite}
                        className={isFav ? "is-favorite" : ""}
                        aria-label="Toggle Favorite"
                    >
                        <Heart size={18} />
                    </ActionButton>

                    {isEditable && (
                        <EditButton onClick={handleEditClick} aria-label="Edit">
                            <Pencil size={18} />
                        </EditButton>
                    )}

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

            {showEdit && (
                <EditModal 
                    char={{ id, name, status, species, origin, image, gender }} 
                    onClose={() => setShowEdit(false)} 
                />
            )}
        </>
    );
}

const mapStateToProps = (state) => ({ myFavorites: state.myFavorites });
const mapDispatchToProps = (dispatch) => ({
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);