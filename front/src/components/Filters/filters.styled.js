import styled from "styled-components";

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    width: auto;
    align-items: center;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

// Wrapper para el icono de la izquierda (Descriptivo)
export const IconLeft = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af; /* muted-foreground */
  pointer-events: none; /* El click pasa a través de él */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

// Wrapper para el icono de la derecha (Flecha)
export const IconRight = styled.div`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const StyledSelect = styled.select`
  width: 100%;
  height: 2.5rem;
  padding-left: 2.5rem;  /* Espacio para icono izq */
  padding-right: 2.5rem; /* Espacio para icono der (flecha) */
  
  background-color: rgba(30, 41, 59, 0.5); 
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  
  color: ${props => props.$isPlaceholder ? '#9ca3af' : 'var(--foreground)'};
  font-size: 0.875rem;
  font-family: inherit;
  
  cursor: pointer;
  outline: none;
  
  /* IMPORTANTE: Quitamos la apariencia nativa y la imagen de fondo anterior */
  appearance: none; 
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: none; /* Ya no usamos URL de SVG */

  @media (min-width: 768px) {
    width: 150px;
  }

  &:hover {
    background-color: rgba(30, 41, 59, 0.7);
    border-color: rgba(255, 255, 255, 0.2);
  }

  &:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 1px var(--accent);
  }

  option {
    background-color: #0b0218;
    color: white;
  }
`;

export const ResetButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 2.5rem;
  padding: 0 1rem;
  
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  color: #ef4444; 
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;

  &:hover {
    background-color: rgba(239, 68, 68, 0.2);
    border-color: #ef4444;
  }
`;