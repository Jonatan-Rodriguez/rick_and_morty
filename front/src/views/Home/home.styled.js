import styled from 'styled-components';

// El wrapper principal que contiene todo el fondo y estructura
export const ContainerHome = styled.div`
  width: 100%;
  min-height: 100vh;
  /* Fondo oscuro base (ya lo tienes en globals, pero reforzamos) */
  background-color: var(--background); 
  
  /* Patrón de estrellas (Opcional, si quieres mantener el look espacial) */
  background-image: 
    radial-gradient(2px 2px at 20px 30px, rgba(255, 255, 255, 0.3), transparent),
    radial-gradient(2px 2px at 40px 70px, rgba(255, 255, 255, 0.2), transparent);
  background-size: 200px 200px;

  /* Padding interno para que no toque los bordes en móviles */
  padding: 2rem 1rem; 
  
  @media (min-width: 1024px) {
    padding: 3rem 2rem;
  }
`;

// Contenedor "Límite" (Max Width) para centrar el contenido en pantallas grandes
export const ContentWrapper = styled.div`
  max-width: 80rem; /* max-w-7xl (aprox 1280px) */
  margin: 0 auto;   /* Centrado horizontal automático */
  display: flex;
  flex-direction: column;
  gap: 2rem; /* Espacio vertical entre secciones */
`;

// Cabecera simple de texto (Estilo v0)
export const HeaderSection = styled.div`
  margin-bottom: 1rem;
  
  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--foreground);
    margin-bottom: 0.5rem;
    
    @media (min-width: 768px) {
      font-size: 2.5rem; /* text-3xl/4xl */
    }
  }

  p {
    color: #9ca3af; /* muted-foreground */
    font-size: 1.1rem;
  }
`;