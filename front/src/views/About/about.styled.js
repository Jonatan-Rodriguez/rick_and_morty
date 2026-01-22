import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const spin = keyframes`
  100% { transform: rotate(360deg); }
`;

export const AboutContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  background-color: var(--background);
  
  /* Fondo de estrellas consistente */
  background-image: 
    radial-gradient(2px 2px at 20px 30px, rgba(255, 255, 255, 0.3), transparent),
    radial-gradient(2px 2px at 40px 70px, rgba(255, 255, 255, 0.2), transparent);
  background-size: 200px 200px;
`;

export const ProfileCard = styled.div`
  position: relative;
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 3rem 2rem;
  max-width: 50rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  animation: ${float} 6s ease-in-out infinite;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    text-align: left;
  }
`;

// --- SECCIÓN IMAGEN ---
export const ImageSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
`;

export const AvatarWrapper = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  padding: 5px;
  position: relative;
  
  /* Anillo giratorio de neón */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: var(--primary);
    border-right-color: var(--accent);
    animation: ${spin} 3s linear infinite;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(15, 23, 42, 0.8);
  background-color: #1e293b;
`;

// --- SECCIÓN INFO ---
export const InfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Name = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--foreground);
  margin: 0;
  
  span {
    color: var(--primary);
  }
`;

export const Role = styled.h2`
  font-size: 1.1rem;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

export const Bio = styled.p`
  color: #9ca3af;
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

// --- STACK TECNOLÓGICO (Grid de pills) ---
export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const TechBadge = styled.span`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  font-size: 0.85rem;
  color: #e2e8f0;
  transition: all 0.2s;
  cursor: default;

  &:hover {
    border-color: var(--primary);
    color: var(--primary);
    transform: translateY(-2px);
  }
`;

// --- REDES SOCIALES ---
export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    color: #9ca3af;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s;

    &:hover {
      background: var(--primary);
      color: black;
      box-shadow: 0 0 15px var(--primary);
      transform: translateY(-3px);
    }
  }
`;