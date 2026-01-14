import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const scaleUp = keyframes`
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7); /* Fondo oscuro semitransparente */
  backdrop-filter: blur(4px); /* Efecto blur en el fondo */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  animation: ${fadeIn} 0.2s ease-out;
  padding: 1rem;
`;

export const ModalContainer = styled.div`
  background: #1e293b; /* Slate 800 */
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  width: 100%;
  max-width: 32rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
  animation: ${scaleUp} 0.2s ease-out;
  overflow: hidden;
`;

export const Header = styled.div`
  padding: 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

export const IconBadge = styled.div`
  background-color: rgba(239, 68, 68, 0.15); /* Rojo suave */
  padding: 0.75rem;
  border-radius: 50%;
  color: #ef4444; /* Rojo alerta */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  color: #94a3b8; /* Slate 400 */
  font-size: 0.95rem;
  line-height: 1.5;
`;

export const Footer = styled.div`
  background-color: rgba(15, 23, 42, 0.5); /* Slate 900 semi */
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`;

export const ButtonBase = styled.button`
  padding: 0.6rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid transparent;
`;

export const CancelButton = styled(ButtonBase)`
  background-color: transparent;
  color: white;
  border-color: rgba(255, 255, 255, 0.1);

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

export const DeleteButton = styled(ButtonBase)`
  background-color: #ef4444; /* Rojo */
  color: white;
  
  &:hover {
    background-color: #dc2626; /* Rojo más oscuro */
  }
`;