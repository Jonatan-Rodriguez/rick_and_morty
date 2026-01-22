import styled from "styled-components";

// --- LAYOUT GENERAL ---
export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: var(--background);
  
  /* Patrón de estrellas */
  background-image: 
    radial-gradient(2px 2px at 20px 30px, rgba(255, 255, 255, 0.3), transparent),
    radial-gradient(2px 2px at 40px 70px, rgba(255, 255, 255, 0.2), transparent);
  background-size: 200px 200px;
`;

export const ContentWrapper = styled.div`
  max-width: 80rem;
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
  background-color: rgba(239, 68, 68, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: #ef4444;
    fill: #ef4444; 
  }
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: var(--foreground);
`;

export const Subtitle = styled.p`
  color: #9ca3af;
  font-size: 1rem;

  b{
    color: var(--portal-green);
  }
`;

// --- GRID DE CARTAS ---
export const FavoritesGrid = styled.div`
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