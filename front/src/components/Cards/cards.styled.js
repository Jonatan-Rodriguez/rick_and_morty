import styled from "styled-components";

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  width: 100%;
  padding: 1rem 0;
  justify-items: center; 
  align-content: start;
  
  /* sm:grid-cols-2 (Tabletas) */
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* lg:grid-cols-3 (Laptops) */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* xl:grid-cols-4 (Monitores grandes) */
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;