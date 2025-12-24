import { useState } from 'react';
import axios from '../../config/axiosConfig';
import { useNavigate } from 'react-router-dom';
import { CreateContainer, CreateForm, ButtonSubmit } from './create.styled';

const Create = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: '',
        status: 'Alive',
        species: '',
        gender: 'Male',
        origin: '',
        image: ''
    });

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(!input.name || !input.origin || !input.image || !input.species) {
            return alert('Por favor completa todos los campos');
        }

        try {
            await axios.post('/character', input);
            alert('¡Personaje Creado con Éxito!');
            navigate('/home'); 
        } catch (error) {
            console.error(error);
            alert('Error al crear personaje');
        }
    };

    return (
        // Reemplazamos los divs y clases por los componentes estilizados
        <CreateContainer>
            <CreateForm onSubmit={handleSubmit}>
                <h2>Crea tu Personaje</h2>

                <label>Nombre:</label>
                <input type="text" name="name" value={input.name} onChange={handleChange} placeholder="Ej: Super Rick" />

                <label>Especie:</label>
                <input type="text" name="species" value={input.species} onChange={handleChange} placeholder="Ej: Human, Alien..." />

                <label>Origen:</label>
                <input type="text" name="origin" value={input.origin} onChange={handleChange} placeholder="Ej: Earth C-137" />

                <label>Imagen (URL):</label>
                <input type="text" name="image" value={input.image} onChange={handleChange} placeholder="https://..." />

                <label>Estado:</label>
                <select name="status" value={input.status} onChange={handleChange}>
                    <option value="Alive">Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>

                <label>Género:</label>
                <select name="gender" value={input.gender} onChange={handleChange}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>

                <ButtonSubmit type="submit">CREAR PERSONAJE</ButtonSubmit>
            </CreateForm>
        </CreateContainer>
    );
};

export default Create;