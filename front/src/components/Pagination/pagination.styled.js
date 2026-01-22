import styled from "styled-components";

export const ContainerPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 3rem 0;
  flex-wrap: wrap;
`;

/* Botón base para Prev/Next (Flechas) */
export const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background-color: transparent;
  border: 1px solid transparent;
  color: #9ca3af;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    color: var(--foreground);
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

/* Botón para los Números (1, 2, 3...) */
export const NumberButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2.5rem;
  height: 2.5rem;
  padding: 0 0.5rem;
  border-radius: 0.5rem;
  font-family: monospace;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  /* Estado Normal */
  background-color: transparent;
  border: 1px solid transparent;
  color: #9ca3af;

  /* Estado Hover */
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--foreground);
  }

  /* Estado ACTIVO (La página actual) */
  &.active {
    background-color: rgba(134, 239, 172, 0.1);
    border: 1px solid rgba(134, 239, 172, 0.5);
    color: var(--primary);
    font-weight: bold;
    box-shadow: 0 0 10px rgba(34, 197, 94, 0.2);
  }
`;

/* Puntos suspensivos (...) */
export const Ellipsis = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2.5rem;
  color: #6b7280;
  font-weight: bold;
  letter-spacing: 2px;
`;