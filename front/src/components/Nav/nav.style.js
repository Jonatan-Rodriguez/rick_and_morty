import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Contenedor principal (Sticky + Glassmorphism)
export const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  height: 64px; /* h-16 */
  border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* border-border */
  
  /* Efecto Glass */
  background: var(--glass);
  backdrop-filter: blur(12px);
  
  padding: 0 1rem;
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

// Wrapper para centrar el contenido (max-w-7xl mx-auto)
export const NavContent = styled.div`
  max-width: 80rem; /* 7xl */
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// LOGO PERSONALIZADO (Círculo RM)
export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  
  .logo-circle {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: rgba(134, 239, 172, 0.2); /* primary/20 */
    border: 1px solid var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 15px var(--portal-green);
    
    span {
      color: var(--primary);
      font-weight: bold;
      font-size: 0.875rem;
    }
  }
  
  .logo-text {
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--primary);
    filter: drop-shadow(0 0 10px var(--portal-green));
    display: none; /* Oculto en móbiles muy pequeños si falta espacio */
    
    @media (min-width: 380px) {
      display: block;
    }
  }
`;

// MENÚ DE ESCRITORIO
export const DesktopMenu = styled.div`
  display: none;
  
  @media (min-width: 768px) { /* md:flex */
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
  
  /* Separador vertical */
  .separator {
    width: 1px;
    height: 1.5rem;
    background-color: rgba(255, 255, 255, 0.2); /* border */
    margin: 0 0.5rem;
  }
  
  /* Estilo especial para el botón de Salir */
  .exit-btn {
    color: #9ca3af; /* muted-foreground */
    &:hover {
      color: #ef4444; /* destructive (rojo) */
      background-color: rgba(239, 68, 68, 0.1);
      box-shadow: none;
      
      .ico {
        filter: none; /* Quitamos el brillo verde */
        color: #ef4444;
      }
    }
  }
`;

// BOTÓN HAMBURGUESA (MÓVIL)
export const MobileToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: transparent;
  border: none;
  border-radius: 0.5rem;
  color: #9ca3af;
  cursor: pointer;
  transition: color 0.2s;
  
  &:hover {
    color: var(--foreground);
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  @media (min-width: 768px) {
    display: none; /* Oculto en escritorio */
  }
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

// MENÚ DESPLEGABLE (MÓVIL)
export const MobileMenu = styled.div`
  position: fixed;
  top: 64px; /* Justo debajo del navbar */
  left: 0;
  right: 0;
  background: var(--glass);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  /* Animación de entrada */
  transform-origin: top;
  transition: all 0.3s ease-out;
  transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  opacity: ${props => props.$isOpen ? '1' : '0'};
  pointer-events: ${props => props.$isOpen ? 'all' : 'none'};
  z-index: 40;
  
  @media (min-width: 768px) {
    display: none;
  }
`;