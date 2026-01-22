import styled from "styled-components";

// Contenedor Principal (Glass Card)
export const CardWrapper = styled.div`
  position: relative;
  background: rgba(30, 41, 59, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 300px;

  /* Efecto Hover en la Tarjeta completa */
  &:hover {
    border-color: rgba(134, 239, 172, 0.5);
    box-shadow: 0 0 30px rgba(34, 197, 94, 0.2);
    
    .actions-group {
      opacity: 1;
      transform: translateY(0);
    }
    
    .character-image {
      transform: scale(1.05);
    }
  }
`;

// Contenedor de la Imagen
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;

  img.character-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
`;

// Grupo de Botones Flotantes (Favorito / Eliminar)
export const ActionsGroup = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 20;
  display: flex;
  gap: 0.5rem;
  opacity: 0; 
  transform: translateY(-5px);
  transition: all 0.3s ease;
`;

// Botón Circular (Glass)
export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  
  /* Glass effect */
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  color: white;
  transition: all 0.2s;

  &:hover {
    background: rgba(239, 68, 68, 0.8);
    transform: scale(1.1);
  }

  /* Variación para botón favorito activo */
  &.is-favorite {
    background: rgba(239, 68, 68, 0.9);
    color: white;
    box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
    
    svg {
      fill: currentColor;
    }
  }
`;

// Contenedor de Información (Texto abajo)
export const InfoContainer = styled.div`
  padding: 1rem;
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(8px);
  border-top: 1px solid rgba(255, 255, 255, 0.05);

  h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.125rem;
    font-weight: 600;
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

// Fila de Status (Puntito + Texto)
export const StatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #9ca3af;
`;

// El puntito de estado
export const StatusDot = styled.span`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.$status) {
      case 'Alive': return 'var(--primary)';
      case 'Dead': return '#ef4444';
      default: return '#9ca3af';
    }
  }};
  
  box-shadow: ${props => props.$status === 'Alive' ? '0 0 8px var(--primary)' : 'none'};
`;

export const EditButton = styled(ActionButton)`
  &:hover {
    background: rgba(251, 191, 36, 0.8);
    color: white;
  }
`;