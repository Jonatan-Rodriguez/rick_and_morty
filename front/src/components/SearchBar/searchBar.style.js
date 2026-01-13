import styled from "styled-components";

// Contenedor Principal (Responsive: Columna en móvil, Fila en escritorio)
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; /* gap-4 */
  margin-bottom: 2rem; /* mb-8 */
  width: 100%;
  max-width: 800px; /* Un ancho máximo razonable */
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 640px) { /* sm:flex-row */
    flex-direction: row;
    align-items: center;
  }
`;

// Grupo del Input (Input + Icono Lupa + Botón X)
export const InputGroup = styled.div`
  position: relative;
  flex: 1; /* Ocupa todo el espacio posible */
  
  /* Icono de Lupa (Posición absoluta a la izquierda) */
  .search-icon {
    position: absolute;
    left: 0.75rem; /* left-3 */
    top: 50%;
    transform: translateY(-50%);
    width: 1rem; /* w-4 */
    height: 1rem; /* h-4 */
    color: #9ca3af; /* text-muted-foreground */
    pointer-events: none; /* Para que el click pase al input */
  }

  /* Botón de Limpiar (X) - Posición absoluta a la derecha */
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

// El Input de Texto Estilizado
export const StyledInput = styled.input`
  width: 100%;
  height: 2.5rem; /* h-10 aprox */
  padding-left: 2.5rem; /* pl-10 (espacio para la lupa) */
  padding-right: 2.5rem; /* espacio para la X */
  
  /* Estilos v0 (bg-secondary/50 border-border) */
  background-color: rgba(30, 41, 59, 0.5); /* Ajustado para simular secondary/50 */
  border: 1px solid rgba(255, 255, 255, 0.1); /* border-border */
  border-radius: 0.5rem; /* rounded-md */
  color: var(--foreground);
  font-size: 0.875rem;
  
  outline: none;
  transition: all 0.2s;

  &::placeholder {
    color: #9ca3af; /* text-muted-foreground */
  }

  &:focus {
    border-color: var(--accent); /* focus:border-accent */
    box-shadow: 0 0 0 1px var(--accent);
  }
`;

// Grupo de Filtros (Selects)
export const FiltersGroup = styled.div`
  display: flex;
  gap: 0.5rem; /* gap-2 */
`;

// Select Estilizado (Simulando el componente UI de v0)
export const StyledSelect = styled.select`
  width: 140px;
  height: 2.5rem;
  padding: 0 0.75rem;
  
  /* Mismo estilo base que el input */
  background-color: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  color: var(--foreground);
  font-size: 0.875rem;
  cursor: pointer;
  outline: none;
  appearance: none; /* Quita la flecha por defecto fea del navegador */
  
  /* Icono de flecha personalizado (SVG codificado en base64 para no importar imágenes) */
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22gray%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1rem;

  &:focus {
    border-color: var(--accent);
  }

  option {
    background-color: #0b0218; /* Fondo oscuro para las opciones al desplegar */
    color: white;
  }
`;