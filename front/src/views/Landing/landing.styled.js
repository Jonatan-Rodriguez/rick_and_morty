import styled, { keyframes } from 'styled-components';

// --- Animaciones ---
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

// --- Contenedores Principales ---

export const ContainerLanding = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--background);
  
  background-image: 
    radial-gradient(2px 2px at 20px 30px, rgba(255, 255, 255, 0.3), transparent),
    radial-gradient(2px 2px at 40px 70px, rgba(255, 255, 255, 0.2), transparent),
    radial-gradient(1px 1px at 90px 40px, rgba(255, 255, 255, 0.4), transparent);
  background-size: 200px 200px;
`;

export const NebulaLayer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  
  background: radial-gradient(
    ellipse at center, 
    rgba(96, 165, 250, 0.1), 
    transparent 60%
  );
  
  &.secondary {
    background: radial-gradient(
      ellipse at bottom right, 
      rgba(134, 239, 172, 0.05), 
      transparent 60%
    );
  }
`;

export const PortalRing = styled.div`
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(134, 239, 172, 0.1);
  animation: ${spin} 20s linear infinite;
  pointer-events: none;

  /* CORRECCIÓN AQUÍ: Usamos $props */
  width: ${props => props.$size || '600px'};
  height: ${props => props.$size || '600px'};
  animation-direction: ${props => props.$reverse ? 'reverse' : 'normal'};
  animation-duration: ${props => props.$duration || '20s'};
  
  /* Variante para anillo secundario */
  ${props => props.$variant === 'accent' && `
    border-color: rgba(96, 165, 250, 0.1);
  `}
`;

// --- Contenido Central ---

export const MainContent = styled.main`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 1rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: var(--foreground);
  margin-bottom: 1rem;
  line-height: 1.1;
  letter-spacing: -0.05em;

  @media (min-width: 768px) {
    font-size: 5rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 6rem;
  }

  .title-glow {
    display: block;
    filter: drop-shadow(0 0 30px var(--portal-green));
  }

  .subtitle-glow {
    color: var(--primary);
    filter: drop-shadow(0 0 20px var(--portal-green));
  }
`;

export const Subtitle = styled.p`
  color: #9ca3af;
  font-size: 1.125rem;
  max-width: 28rem;
  margin-bottom: 3rem;
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

// --- Botón del Portal ---

export const StyledPortalButton = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  
  &:hover .glow-ring {
    background-color: rgba(134, 239, 172, 0.3);
  }

  &:hover .button-core {
    transform: scale(1.05);
    box-shadow: 
      0 0 30px var(--portal-green),
      0 0 60px var(--portal-green),
      0 0 90px var(--portal-cyan);
  }

  .glow-ring {
    position: absolute;
    inset: -1rem;
    border-radius: 9999px;
    background-color: rgba(134, 239, 172, 0.2);
    filter: blur(24px);
    transition: background-color 0.3s;
  }

  .portal-swirl-container {
    position: absolute;
    inset: -0.5rem;
    border-radius: 9999px;
    opacity: 0.5;
    animation: ${spin} 20s linear infinite;
    overflow: hidden;
  }
  
  .portal-swirl {
    width: 100%;
    height: 100%;
    border-radius: 9999px;
    background: conic-gradient(from 0deg, transparent, var(--portal-green), var(--portal-cyan), transparent);
  }

  .button-core {
    position: relative;
    padding: 1.25rem 2.5rem;
    border-radius: 9999px;
    font-weight: 700;
    font-size: 1.125rem;
    background-color: var(--primary);
    color: var(--primary-foreground);
    box-shadow: 0 0 20px var(--portal-green), 0 0 40px var(--portal-green);
    transition: all 0.3s ease;
    animation: ${float} 3s ease-in-out infinite;
    z-index: 10;
  }
  
  span {
    position: relative;
    z-index: 10;
    filter: drop-shadow(0 0 10px var(--portal-green));
  }
`;

// --- Footer ---

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
`;

export const SocialGlass = styled.div`
  background: var(--glass);
  backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  border-radius: 0.75rem;
  padding: 1rem 1.5rem;
  display: flex;
  gap: 1.5rem;
  align-items: center;

  a {
    color: #9ca3af;
    transition: color 0.3s;
    font-size: 0.875rem;
    font-weight: 600;
    
    &:hover {
      color: var(--primary);
    }
  }
`;