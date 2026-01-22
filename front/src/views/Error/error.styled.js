import styled, { keyframes, css } from 'styled-components';

// --- Animaciones ---
const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
`;

// Efecto de temblor/glitch para el portal
const glitchShake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

// Cambio de color para indicar error en el portal
const portalColorShift = keyframes`
    0%, 100% { border-color: var(--primary); box-shadow: 0 0 30px var(--primary), inset 0 0 30px var(--primary); }
    50% { border-color: #ef4444; box-shadow: 0 0 40px #ef4444, inset 0 0 40px #ef4444; }
`;

// --- Estructura ---
export const ErrorContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: var(--background);
  overflow: hidden;
  position: relative;

  /* Patrón de estrellas */
  background-image: 
    radial-gradient(2px 2px at 20px 30px, rgba(255, 255, 255, 0.3), transparent),
    radial-gradient(2px 2px at 40px 70px, rgba(255, 255, 255, 0.2), transparent),
    radial-gradient(1px 1px at 90px 40px, rgba(255, 255, 255, 0.4), transparent);
  background-size: 200px 200px;
`;

export const GlassCard = styled.div`
  position: relative;
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  padding: 4rem 2rem;
  max-width: 36rem;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  z-index: 10;
  animation: ${float} 6s ease-in-out infinite;
`;

// --- Elemento Visual (Portal Glitcheado) ---
export const BrokenPortalWrapper = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GlitchRing = styled.div`
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 8px solid transparent;
    animation: 
        ${portalColorShift} 4s ease-in-out infinite,
        ${glitchShake} 0.5s linear infinite;
    opacity: 0.8;

    &::after {
        content: '';
        position: absolute;
        inset: -15px;
        border-radius: 50%;
        border: 4px solid var(--accent);
        opacity: 0.3;
        animation: ${glitchShake} 2s linear infinite reverse;
    }
`;

export const IconWrapper = styled.div`
    z-index: 2;
    color: white;
    animation: ${float} 3s ease-in-out infinite;
    filter: drop-shadow(0 0 10px rgba(255,255,255,0.5));
`;

// --- Tipografía y Contenido ---
// Efecto de texto glitcheado para el "404"
const glitchText = css`
  text-shadow: 
    2px 2px 0px #ef4444, 
    -2px -2px 0px var(--accent);
  animation: ${glitchShake} 1s infinite;
`;

export const ErrorTitle = styled.h1`
  font-size: 6rem;
  font-weight: 900;
  line-height: 1;
  color: white;
  margin: 0;
  letter-spacing: -0.05em;
  position: relative;
  ${glitchText}
`;

export const ErrorSubtitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--foreground);
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const ErrorDescription = styled.p`
  color: #9ca3af;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 28rem;
  margin-bottom: 2.5rem;
`;

// --- Botones ---
export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 2rem;
  background-color: var(--primary);
  color: black;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 35px rgba(34, 197, 94, 0.5);
  }
  
  &:active { transform: translateY(-1px); }
`;

export const SecondaryButton = styled(PrimaryButton)`
    background-color: transparent;
    border: 2px solid rgba(255, 255, 255, 0.2);
    color: white;
    box-shadow: none;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        border-color: white;
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
    }
`;