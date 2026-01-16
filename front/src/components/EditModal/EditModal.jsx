import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateChar } from '../../redux/action'; // Importa getChar para refrescar si es necesario
import { X, Save } from 'lucide-react';
import styled from 'styled-components';

// --- ESTILOS DEL MODAL (Pégalos aquí mismo o en un archivo aparte) ---
const Overlay = styled.div`
  position: fixed; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(5px);
  display: flex; justify-content: center; align-items: center; z-index: 100;
`;
const ModalContainer = styled.div`
  background: #1e293b; border: 1px solid rgba(255,255,255,0.1); border-radius: 1rem;
  padding: 2rem; width: 90%; max-width: 400px; position: relative;
  box-shadow: 0 0 30px rgba(0,0,0,0.5);
`;
const CloseBtn = styled.button`
  position: absolute; top: 1rem; right: 1rem; background: none; border: none; color: #94a3b8; cursor: pointer;
  &:hover { color: white; }
`;
const Title = styled.h2` color: white; margin-bottom: 1.5rem; text-align: center; `;
const InputGroup = styled.div` margin-bottom: 1rem; `;
const Label = styled.label` display: block; color: #94a3b8; font-size: 0.9rem; margin-bottom: 0.5rem; `;
const Input = styled.input`
  width: 100%; padding: 0.75rem; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 0.5rem; color: white; outline: none;
  &:focus { border-color: var(--primary); }
`;
const SaveBtn = styled.button`
  width: 100%; padding: 0.75rem; background: var(--primary); color: black; font-weight: bold;
  border: none; border-radius: 0.5rem; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.5rem;
  &:hover { opacity: 0.9; }
`;

const EditModal = ({ char, onClose }) => {
    const dispatch = useDispatch();
    
    // Estado local con los datos actuales del personaje
    const [input, setInput] = useState({
        name: char.name,
        image: char.image,
        species: char.species,
        origin: char.origin, // Si en tu DB origin es string, usa char.origin. Si es objeto {name:...}, usa char.origin.name
        status: char.status,
        gender: char.gender
    });

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(updateChar(char.id, input));
        onClose(); // Cerrar modal
        // Opcional: dispatch(getChar()); para asegurar sincronía, aunque el reducer debería encargarse.
    };

    return (
        <Overlay>
            <ModalContainer>
                <CloseBtn onClick={onClose}><X /></CloseBtn>
                <Title>Editar Personaje</Title>
                <form onSubmit={handleSubmit}>
                    <InputGroup>
                        <Label>Nombre</Label>
                        <Input name="name" value={input.name} onChange={handleChange} />
                    </InputGroup>
                    <InputGroup>
                        <Label>URL de Imagen</Label>
                        <Input name="image" value={input.image} onChange={handleChange} />
                    </InputGroup>
                    <InputGroup>
                        <Label>Especie</Label>
                        <Input name="species" value={input.species} onChange={handleChange} />
                    </InputGroup>
                    {/* Puedes agregar selects para Status y Gender si quieres */}
                    <SaveBtn type="submit">
                        <Save size={18} /> Guardar Cambios
                    </SaveBtn>
                </form>
            </ModalContainer>
        </Overlay>
    );
};

export default EditModal;