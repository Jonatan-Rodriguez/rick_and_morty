import styled from "styled-components";

// --- LAYOUT GENERAL ---
export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: var(--background);
  
  /* Patrón de estrellas consistente */
  background-image: 
    radial-gradient(2px 2px at 20px 30px, rgba(255, 255, 255, 0.3), transparent),
    radial-gradient(2px 2px at 40px 70px, rgba(255, 255, 255, 0.2), transparent);
  background-size: 200px 200px;
`;

export const ContentWrapper = styled.div`
  max-width: 80rem; /* 1280px */
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (min-width: 1024px) {
    padding: 2rem;
  }
`;

// --- HEADER SECTION ---
export const HeaderSection = styled.div`
  margin-bottom: 2rem;
`;

export const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
`;

export const IconBox = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: rgba(96, 165, 250, 0.2); /* blue/20 (color Accent) */
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: #60a5fa; /* blue-400 */
  }
`;

export const Title = styled.h1`
  font-size: 1.875rem; /* ~30px */
  font-weight: 700;
  color: var(--foreground);
`;

export const Subtitle = styled.p`
  color: #9ca3af;
  font-size: 1rem;
`;

// El texto rojo que pediste
export const DestructiveText = styled.span`
  color: #ef4444; /* Rojo destructive */
  margin-left: 0.5rem;
  font-weight: 500;
`;

// --- GRID ---
export const CreationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

// --- MENSAJE VACÍO SIMPLE (Por si no quieres usar el componente EmptyState completo) ---
export const EmptyMessageContainer = styled.div`
  text-align: center;
  padding: 4rem 1rem;
  color: #9ca3af;
  
  h2 {
    font-size: 1.5rem;
    color: var(--primary);
    margin-bottom: 1rem;
  }
`;