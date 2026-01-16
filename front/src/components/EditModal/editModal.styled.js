import styled, { keyframes } from 'styled-components';

// Animación de entrada suave
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalContainer = styled.div`
  background: #1e293b; /* Slate 800 */
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  width: 90%;
  max-width: 400px;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.2s ease-out;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: white;
  }
`;

export const Title = styled.h2`
  color: white;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const InputGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  color: #94a3b8;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  color: white;
  outline: none;
  font-size: 0.95rem;
  transition: border-color 0.2s;

  &:focus {
    border-color: var(--primary); /* Verde Rick */
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const SaveBtn = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: var(--primary);
  color: black;
  font-weight: bold;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  transition: opacity 0.2s, transform 0.1s;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: translateY(1px);
  }
`;