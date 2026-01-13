import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.75rem; /* gap-3 */
  padding: 0.75rem 1rem;
  border-radius: 0.5rem; /* rounded-lg */
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  
  /* --- ESTADO POR DEFECTO (Inactivo) --- */
  color: #9ca3af; /* text-muted-foreground */
  background-color: transparent;

  span {
    font-size: 1rem;
    font-weight: 500;
  }

  /* Estilos específicos para el Icono SVG */
  .ico {
    width: 1.25rem; /* 20px - tamaño estándar de iconos */
    height: 1.25rem;
    stroke-width: 2px; /* Grosor de línea del icono */
    transition: all 0.3s ease;
  }

  /* --- HOVER --- */
  &:hover {
    color: var(--primary);
    background-color: rgba(134, 239, 172, 0.1); /* bg-primary/10 */
    
    .ico {
      filter: drop-shadow(0 0 5px var(--primary));
      transform: scale(1.1);
    }
  }

  /* --- ACTIVE (Cuando estás en la ruta) --- */
  &.active {
    background-color: rgba(134, 239, 172, 0.2); /* bg-primary/20 */
    color: var(--primary);
    box-shadow: 0 0 15px rgba(34, 197, 94, 0.2);

    .ico {
      filter: drop-shadow(0 0 8px var(--primary));
    }
  }
`;