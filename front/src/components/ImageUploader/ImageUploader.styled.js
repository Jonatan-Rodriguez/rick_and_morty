import styled, { keyframes, css } from "styled-components";

const spin = keyframes`
  100% { transform: rotate(360deg); }
`;

export const UploaderContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

export const DropZone = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border: 2px dashed rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;

  /* Estado cuando se arrastra algo encima */
  ${props => props.$isDragActive && css`
    border-color: var(--primary);
    background: rgba(134, 239, 172, 0.1);
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.2);
  `}

  &:hover {
    border-color: var(--primary);
    background: rgba(255, 255, 255, 0.05);
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  position: absolute;
  inset: 0;
  z-index: 1;
`;

export const Placeholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #94a3b8;
  z-index: 2;
  text-align: center;
  padding: 1rem;

  svg {
    color: var(--primary);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
  }
  
  span {
    font-size: 0.8rem;
    color: #64748b;
  }
`;

export const LoadingOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  color: white;
  gap: 1rem;

  .spinner {
    animation: ${spin} 1s linear infinite;
  }
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: rgba(239, 68, 68, 0.8);
  color: white;
  border: none;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 5;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
    background: #ef4444;
  }
`;