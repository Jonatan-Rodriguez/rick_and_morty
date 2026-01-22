import styled from 'styled-components';

export const ContainerHome = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--background); 
  background-image: 
    radial-gradient(2px 2px at 20px 30px, rgba(255, 255, 255, 0.3), transparent),
    radial-gradient(2px 2px at 40px 70px, rgba(255, 255, 255, 0.2), transparent);
  background-size: 200px 200px;
  padding: 2rem 1rem; 
  
  @media (min-width: 1024px) {
    padding: 3rem 2rem;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 80rem; 
  margin: 0 auto; 
  display: flex;
  flex-direction: column;
  gap: 2rem; 
`;

export const HeaderSection = styled.div`
  margin-bottom: 1rem;
  text-align: center;
  
  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--foreground);
    margin-bottom: 0.5rem;
    text-shadow: 0 0 20px rgba(134, 239, 172, 0.2);
    
    @media (min-width: 768px) {
      font-size: 3.5rem; 
    }
  }

  p {
    color: #9ca3af; 
    font-size: 1.1rem;
  }
`;

// --- ESTILOS PARA SEPARACIÓN ---

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: var(--primary);
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  /* Línea decorativa al lado del título */
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, var(--primary), transparent);
    opacity: 0.3;
  }
`;

export const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  margin: 1rem 0;
  width: 100%;
`;