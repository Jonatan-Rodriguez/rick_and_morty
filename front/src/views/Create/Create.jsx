import React, { useState } from 'react';
import axios from '../../config/axiosConfig';
import { useNavigate } from 'react-router-dom';
// Estilos
import { 
  PageContainer,
  FormWrapper,
  HeaderSection,
  Title,
  Subtitle,
  FormCard,
  FormGrid,
  InputGroup,
  Label,
  InputWrapper,
  StyledInput,
  StyledSelect,
  ButtonSubmit
} from './create.styled';
// Componentes
import FeedbackModal from '../../components/FeedbackModal/FeedbackModal';
// Iconos
import { User, Globe, Dna, Image as ImageIcon, Activity, ChevronDown } from "lucide-react";

const Create = () => {
    const navigate = useNavigate();

    // Estado del Formulario
    const [input, setInput] = useState({
        name: '',
        status: 'Alive',
        species: '',
        gender: 'Male',
        origin: '',
        image: ''
    });

    // Estado del Modal de Feedback
    const [modal, setModal] = useState({
        isOpen: false,
        type: 'success', // 'success' | 'error'
        title: '',
        message: ''
    });

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validación básica
        if(!input.name || !input.origin || !input.image || !input.species) {
            setModal({
                isOpen: true,
                type: 'error',
                title: 'Campos incompletos',
                message: 'Por favor, asegúrate de llenar todos los campos requeridos para crear el personaje.'
            });
            return;
        }

        try {
            await axios.post('/character', input);
            
            // Éxito: Mostramos modal y luego redirigimos
            setModal({
                isOpen: true,
                type: 'success',
                title: '¡Experimento Exitoso!',
                message: `El personaje ${input.name} ha sido añadido a la base de datos correctamente.`
            });

        } catch (error) {
            console.error(error);
            setModal({
                isOpen: true,
                type: 'error',
                title: 'Error en el Laboratorio',
                message: 'Hubo un problema al intentar crear el personaje. Inténtalo de nuevo más tarde.'
            });
        }
    };

    const handleCloseModal = () => {
        setModal({ ...modal, isOpen: false });
        // Si fue éxito, redirigimos al cerrar el modal
        if (modal.type === 'success') {
            navigate('/home');
        }
    };

    return (
        <PageContainer>
            <FormWrapper>
                <HeaderSection>
                    <Title>Crear Nuevo Personaje</Title>
                    <Subtitle>Añade un nuevo espécimen a la base de datos del multiverso.</Subtitle>
                </HeaderSection>

                <FormCard onSubmit={handleSubmit}>
                    <FormGrid>
                        {/* 1. NOMBRE (Ancho completo en móvil, mitad en desktop) */}
                        <InputGroup className="col-span-2">
                            <Label>Nombre del Personaje</Label>
                            <InputWrapper>
                                <User className="icon" size={18} />
                                <StyledInput 
                                    type="text" 
                                    name="name" 
                                    value={input.name} 
                                    onChange={handleChange} 
                                    placeholder="Ej: Evil Morty" 
                                />
                            </InputWrapper>
                        </InputGroup>

                        {/* 2. ESPECIE */}
                        <InputGroup>
                            <Label>Especie</Label>
                            <InputWrapper>
                                <Dna className="icon" size={18} />
                                <StyledInput 
                                    type="text" 
                                    name="species" 
                                    value={input.species} 
                                    onChange={handleChange} 
                                    placeholder="Ej: Human, Alien..." 
                                />
                            </InputWrapper>
                        </InputGroup>

                        {/* 3. ORIGEN */}
                        <InputGroup>
                            <Label>Origen</Label>
                            <InputWrapper>
                                <Globe className="icon" size={18} />
                                <StyledInput 
                                    type="text" 
                                    name="origin" 
                                    value={input.origin} 
                                    onChange={handleChange} 
                                    placeholder="Ej: Earth C-137" 
                                />
                            </InputWrapper>
                        </InputGroup>

                        {/* 4. ESTADO (Select) */}
                        <InputGroup>
                            <Label>Estado Vital</Label>
                            <InputWrapper>
                                <Activity className="icon" size={18} />
                                <StyledSelect name="status" value={input.status} onChange={handleChange}>
                                    <option value="Alive">Vivo (Alive)</option>
                                    <option value="Dead">Muerto (Dead)</option>
                                    <option value="unknown">Desconocido</option>
                                </StyledSelect>
                                <ChevronDown className="arrow-icon" size={16} />
                            </InputWrapper>
                        </InputGroup>

                        {/* 5. GÉNERO (Select) */}
                        <InputGroup>
                            <Label>Género</Label>
                            <InputWrapper>
                                <User className="icon" size={18} />
                                <StyledSelect name="gender" value={input.gender} onChange={handleChange}>
                                    <option value="Male">Masculino</option>
                                    <option value="Female">Femenino</option>
                                    <option value="Genderless">Sin Género</option>
                                    <option value="unknown">Desconocido</option>
                                </StyledSelect>
                                <ChevronDown className="arrow-icon" size={16} />
                            </InputWrapper>
                        </InputGroup>

                        {/* 6. IMAGEN URL (Ancho completo) */}
                        <InputGroup className="full-width">
                            <Label>URL de la Imagen</Label>
                            <InputWrapper>
                                <ImageIcon className="icon" size={18} />
                                <StyledInput 
                                    type="text" 
                                    name="image" 
                                    value={input.image} 
                                    onChange={handleChange} 
                                    placeholder="https://rickandmortyapi.com/..." 
                                />
                            </InputWrapper>
                        </InputGroup>
                    </FormGrid>

                    <ButtonSubmit type="submit">
                        Crear Personaje
                    </ButtonSubmit>
                </FormCard>
            </FormWrapper>

            {/* Modal de Feedback */}
            <FeedbackModal 
                isOpen={modal.isOpen}
                type={modal.type}
                title={modal.title}
                message={modal.message}
                onClose={handleCloseModal}
            />
        </PageContainer>
    );
};

export default Create;