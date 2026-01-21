import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateChar } from '../../redux/action'; 
import { X, Save } from 'lucide-react';

// Componentes
import FeedbackModal from '../FeedbackModal/FeedbackModal'; 
import ImageUploader from '../ImageUploader/ImageUploader';

// Importamos los estilos
import {
  Overlay,
  ModalContainer,
  CloseBtn,
  Title,
  InputGroup,
  Label,
  Input,
  SaveBtn
} from './editModal.styled';

const EditModal = ({ char, onClose }) => {
    const dispatch = useDispatch();
    
    // Estado del formulario
    const [input, setInput] = useState({
        name: char.name,
        image: char.image,
        species: char.species,
        origin: typeof char.origin === 'object' ? char.origin.name : char.origin, 
        status: char.status,
        gender: char.gender
    });

    // Estado para controlar el Feedback (Éxito/Error)
    const [feedback, setFeedback] = useState({
        isOpen: false,
        type: 'success', // 'success' | 'error'
        title: '',
        message: ''
    });

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Llamamos a la acción y esperamos el resultado (true/false)
        const success = await dispatch(updateChar(char.id, input));

        if (success) {
            // Mostrar Modal de Éxito
            setFeedback({
                isOpen: true,
                type: 'success',
                title: 'Éxito al Actualizar',
                message: 'La estructura molecular del personaje ha sido reescrita con éxito. Los cambios ya son visibles en la base de datos.'
            });
        } else {
            // Mostrar Modal de Error
            setFeedback({
                isOpen: true,
                type: 'error',
                title: 'Error al Actualizar',
                message: 'Intentamos modificar el ADN del personaje pero el sistema lo rechazó. Inténtalo de nuevo antes de crear un monstruo Cronenberg.'
            });
        }
    };

    // Manejador para cerrar el Feedback
    const handleCloseFeedback = () => {
        setFeedback({ ...feedback, isOpen: false });
        
        // Si fue un éxito, cerramos también el modal de edición
        if (feedback.type === 'success') {
            onClose();
        }
        // Si fue error, mantenemos el modal de edición abierto para que corrija
    };

    const handleImageUpload = (url) => {
        setInput({ ...input, image: url });
    };

    return (
        <>
            {/* Modal de Edición (Solo visible si no hay feedback abierto para no superponer demasiados) */}
            {!feedback.isOpen && (
                <Overlay>
                    <ModalContainer>
                        <CloseBtn onClick={onClose}>
                            <X size={20} />
                        </CloseBtn>
                        
                        <Title>Editar Personaje</Title>
                        
                        <form onSubmit={handleSubmit}>
                            <InputGroup>
                                <Label>Nombre</Label>
                                <Input 
                                    name="name" 
                                    value={input.name} 
                                    onChange={handleChange} 
                                    placeholder="Nombre del personaje"
                                />
                            </InputGroup>
                            
                            <InputGroup>
                                <Label>Imagen</Label>
                                <ImageUploader 
                                    onImageUpload={handleImageUpload} 
                                    initialImage={input.image} // Pasamos la imagen actual para que se vea
                                />
                            </InputGroup>
                            
                            <InputGroup>
                                <Label>Especie</Label>
                                <Input 
                                    name="species" 
                                    value={input.species} 
                                    onChange={handleChange} 
                                    placeholder="Ej: Human, Alien..."
                                />
                            </InputGroup>
                            
                            <SaveBtn type="submit">
                                <Save size={18} /> 
                                Guardar Cambios
                            </SaveBtn>
                        </form>
                    </ModalContainer>
                </Overlay>
            )}

            {/* Modal de Feedback (Reutilizado) */}
            <FeedbackModal 
                isOpen={feedback.isOpen}
                type={feedback.type}
                title={feedback.title}
                message={feedback.message}
                onClose={handleCloseFeedback}
            />
        </>
    );
};

export default EditModal;