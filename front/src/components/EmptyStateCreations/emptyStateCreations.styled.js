import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem 1rem;
  width: 100%;
`;

export const GlassCard = styled.div`
  background: rgba(30, 41, 59, 0.4);
  border: 1px solid rgba(96, 165, 250, 0.2); /* Borde azul suave */
  border-radius: 1rem;
  padding: 3rem 2rem;
  max-width: 32rem;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconWrapper = styled.div`
  position: relative;
  width: 6rem;
  height: 6rem;
  background: rgba(15, 23, 42, 0.6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(96, 165, 250, 0.3);
  animation: ${float} 4s ease-in-out infinite;

  /* Efecto de resplandor azul detrás */
  .glow-effect {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(96,165,250,0.4) 0%, transparent 70%);
    filter: blur(10px);
    z-index: -1;
  }
`;

export const EmptyTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--foreground);
  margin-bottom: 0.75rem;
`;

export const EmptyDescription = styled.p`
  color: #9ca3af;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

export const CreateButton = styled.button`
  background-color: var(--accent); /* Azul */
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;
  box-shadow: 0 0 15px rgba(96, 165, 250, 0.3);

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 0 25px rgba(96, 165, 250, 0.5);
  }
`;