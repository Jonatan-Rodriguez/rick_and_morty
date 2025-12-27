import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChar, deleteChar } from "../../redux/action"; // Importamos las acciones
import Card from "../../components/Card/Card"; // Usamos tu Card directamente
import styled from "styled-components";

// Un poco de estilo rápido (puedes moverlo a un archivo separado)
const CreationsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 50px;
`;

const EmptyMessage = styled.h2`
    color: #00ff00;
    text-align: center;
    margin-top: 50px;
`;

const MyCreations = () => {
    const dispatch = useDispatch();
    // Obtenemos todos los personajes del estado
    const allCharacters = useSelector(state => state.allCharacters);
    
    // Filtramos SOLO los creados por ti (createdInDb es true)
    const myCharacters = allCharacters.filter(char => char.createdInDb);

    useEffect(() => {
        // Nos aseguramos de tener la lista cargada al entrar
        dispatch(getChar()); 
    }, [dispatch]);

    const handleDelete = (id) => {
        // Confirmación simple antes de borrar
        if (window.confirm("¿Estás seguro de que quieres borrar este personaje?")) {
            dispatch(deleteChar(id));
        }
    };

    return (
        <div>
            <h1 style={{color: "white", textAlign: "center"}}>Mis Creaciones</h1>
            
            {myCharacters.length === 0 ? (
                <EmptyMessage>No has creado ningún personaje aún. ¡Ve a "Crear"!</EmptyMessage>
            ) : (
                <CreationsContainer>
                    {myCharacters.map(char => (
                        <Card
                            key={char.id}
                            id={char.id}
                            name={char.name}
                            species={char.species}
                            gender={char.gender}
                            image={char.image}
                            origin={char.origin.name} // Recuerda que origin ahora es objeto
                            status={char.status}
                            onClose={handleDelete} // <--- AQUÍ PASAMOS LA FUNCIÓN DE BORRAR
                        />
                    ))}
                </CreationsContainer>
            )}
        </div>
    );
};

export default MyCreations;