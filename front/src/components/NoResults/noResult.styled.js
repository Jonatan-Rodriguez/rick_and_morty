import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

export const ContainerNoResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem;
  width: 100%;
  max-width: 400px;
  margin: 2rem auto;
  
  /* Estilo Glassmorphism */
  background: rgba(30, 41, 59, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  backdrop-filter: blur(4px);

  /* Animación de entrada */
  animation: ${float} 6s ease-in-out infinite;

  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem; /* 80px */
    height: 5rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    margin-bottom: 1.5rem;
    color: #9ca3af; /* muted-foreground */
    
    /* Brillo sutil */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);

    svg {
      width: 2.5rem;
      height: 2.5rem;
      opacity: 0.8;
    }
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--foreground);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #9ca3af; /* muted-foreground */
    max-width: 280px;
    line-height: 1.5;
  }
`;