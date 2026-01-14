import styled from "styled-components";

// Contenedor Principal (Flex Row)
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; 
  margin-bottom: 2rem; 
  width: 100%;
  /* Eliminamos max-width fijo para que ocupe lo que le deje el ContentWrapper */
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

// Grupo del Input (Input + Icono)
export const InputGroup = styled.div`
  position: relative;
  width: 100%;
  
  /* En escritorio, el input crece para ocupar todo el espacio sobrante */
  @media (min-width: 768px) {
    flex: 1; 
  }

  /* Icono de Lupa */
  .search-icon {
    position: absolute;
    left: 0.75rem; 
    top: 50%;
    transform: translateY(-50%);
    width: 1rem; 
    height: 1rem; 
    color: #9ca3af; 
    pointer-events: none; 
  }

  /* Botón X */
  .clear-btn {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #9ca3af;
    cursor: pointer;
    padding: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.2s;

    &:hover {
      color: var(--foreground);
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

// Input Estilizado
export const StyledInput = styled.input`
  width: 100%;
  height: 2.5rem; /* h-10 */
  padding-left: 2.5rem; 
  padding-right: 2.5rem; 
  
  background-color: rgba(30, 41, 59, 0.5); 
  border: 1px solid rgba(255, 255, 255, 0.1); 
  border-radius: 0.5rem; 
  color: var(--foreground);
  font-size: 0.875rem;
  
  outline: none;
  transition: all 0.2s;

  &::placeholder {
    color: #9ca3af; 
  }

  &:focus {
    border-color: var(--accent); 
    box-shadow: 0 0 0 1px var(--accent);
  }
`;