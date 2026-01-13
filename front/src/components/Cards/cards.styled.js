import styled from "styled-components";

export const ContainerCards = styled.div`
  /* Configuración de Grid (Reemplaza a Flexbox) */
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* Por defecto: 1 columna (Móvil) */
  gap: 1.5rem; /* gap-6 de Tailwind (aprox 24px) */
  width: 100%;
  padding: 1rem 0;
  
  /* Centrado del contenido */
  justify-items: center; 
  align-content: start;

  /* Breakpoints idénticos a v0.app */
  
  /* sm:grid-cols-2 (Tablets pequeñas / Móviles grandes) */
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