import styled, { keyframes } from "styled-components";

// Animación de rotación para el portal
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 1rem;
  width: 100%;
`;

export const GlassCard = styled.div`
  background: rgba(30, 41, 59, 0.4); /* Efecto cristal */
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  max-width: 32rem; /* Un poco más ancho para mejor lectura */
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

export const PortalIllustration = styled.div`
  position: relative;
  width: 8rem;
  height: 8rem;
  margin: 0 auto 1.5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Fondo pulsante suave */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background-color: rgba(134, 239, 172, 0.05);
  }

  /* Círculo central oscuro */
  .inner-circle {
    position: absolute;
    inset: 0.5rem;
    border-radius: 50%;
    background-color: rgba(15, 23, 42, 1); /* Slate-900 */
    border: 2px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  /* Anillo giratorio (Portal Rick & Morty) */
  .portal-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: var(--primary); /* Verde */
    border-left-color: var(--primary);
    opacity: 0.5;
    animation: ${spin} 8s linear infinite;
  }
`;

export const EmptyTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--foreground);
  margin-bottom: 0.75rem;
`;

export const EmptyDescription = styled.p`
  color: #9ca3af; /* Texto gris suave */
  margin-bottom: 2rem;
  line-height: 1.6;
  font-size: 1rem;
`;

export const GoBackButton = styled.button`
  background-color: var(--primary);
  color: black; /* Texto negro para contraste con el verde neón */
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  transition: all 0.2s ease;
  box-shadow: 0 0 15px rgba(34, 197, 94, 0.2);

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 0 25px rgba(34, 197, 94, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`;