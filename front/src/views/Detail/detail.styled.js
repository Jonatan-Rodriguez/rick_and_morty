import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  background-color: var(--background);
  overflow: hidden; 
`;

export const BackgroundBlur = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  background-image: url(${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
  opacity: 0.2;
  filter: blur(60px);
  transform: scale(1.1); 
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 56rem; 
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: none;
  color: #9ca3af; 
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--foreground);
  }
`;

export const GlassCard = styled.div`
  background: rgba(30, 41, 59, 0.4); 
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem; 
  padding: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);

  @media (min-width: 1024px) {
    padding: 2rem;
  }
`;

export const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 3rem;
  }
`;

export const ImageSection = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1; 
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0 40px rgba(34, 197, 94, 0.3); 
  border: 4px solid rgba(134, 239, 172, 0.3); 
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InfoSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const Header = styled.div`
  margin-bottom: 1.5rem;
`;

export const NameTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: var(--foreground);
  margin-bottom: 0.5rem;
  line-height: 1.1;

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

export const EpisodeBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  border: 1px solid rgba(134, 239, 172, 0.5); 
  color: var(--primary);
  font-size: 0.8rem;
  font-weight: 600;
  background: rgba(34, 197, 94, 0.1);
`;

export const StatsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1; 
`;

export const StatRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  border-radius: 0.75rem;
  background-color: rgba(30, 41, 59, 0.3); 
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(30, 41, 59, 0.5);
  }
`;

export const IconBox = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background-color: rgba(30, 41, 59, 1); 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const StatContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatLabel = styled.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #9ca3af;
  font-weight: 600;
  margin-bottom: 0.1rem;
`;

export const StatValue = styled.span`
  font-size: 1rem;
  color: var(--foreground);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StatusDot = styled.span`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${props => props.$color};
  box-shadow: 0 0 8px ${props => props.$color};
`;

export const FavoriteButton = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  height: 3.5rem; 
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  
  /* LÓGICA DE COLOR */
  background-color: ${props => props.$isFav ? 'rgba(239, 68, 68, 0.1)' : 'var(--accent)'};
  color: ${props => props.$isFav ? '#ef4444' : 'white'};
  border: 1px solid ${props => props.$isFav ? 'rgba(239, 68, 68, 0.5)' : 'transparent'};
  
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${props => props.$isFav ? 'none' : '0 4px 15px rgba(96, 165, 250, 0.3)'};

  &:hover {
    transform: translateY(-2px);
    background-color: ${props => props.$isFav ? 'rgba(239, 68, 68, 0.2)' : 'var(--accent)'};
    opacity: ${props => props.$isFav ? 1 : 0.9};
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    transition: transform 0.2s;
  }
  
  &:active svg {
    transform: scale(0.8);
  }
`;

export const EditDetailButton = styled.button`
  margin-top: 1rem;
  width: 100%;
  height: 3.5rem; 
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background-color: rgba(245, 158, 11, 0.1);
  color: #f59e0b;
  border: 1px solid rgba(245, 158, 11, 0.5);
  
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-2px);
    background-color: rgba(245, 158, 11, 0.2);
    box-shadow: 0 4px 15px rgba(245, 158, 11, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;