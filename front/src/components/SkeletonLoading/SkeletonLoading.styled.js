import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  to {
    background-position: -200% 0;
  }
`;

export const ContainerSkeletonLoading = styled.div`
  /* Mismas dimensiones y estructura base que la Card real */
  width: 100%;
  max-width: 300px;
  background-color: rgba(30, 41, 59, 0.4); /* Fondo base oscuro */
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 0.75rem; /* rounded-xl */
  overflow: hidden;
  display: flex;
  flex-direction: column;

  /* IMITACIÓN DE LA IMAGEN (Cuadrado perfecto) */
  .skeleton-image {
    width: 100%;
    aspect-ratio: 1 / 1; /* Mantiene la proporción cuadrada */
    position: relative;
    overflow: hidden;
  }

  /* CONTENEDOR DE TEXTO */
  .skeleton-info {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    background: rgba(30, 41, 59, 0.6);
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }

  /* BARRA DE TÍTULO (Nombre) */
  .skeleton-title {
    height: 1.5rem; /* Altura similar a un h3 */
    width: 75%;
    border-radius: 0.25rem;
  }

  /* BARRA DE DETALLE (Status) */
  .skeleton-text {
    height: 1rem;
    width: 50%;
    border-radius: 0.25rem;
  }

  /* ANIMACIÓN SHIMMER (Efecto de carga oscuro) */
  .skeleton-pulse {
    background-color: #1e293b; /* Color base oscuro (slate-800) */
    background-image: linear-gradient(
      90deg,
      #1e293b 0px,
      #334155 50%, /* Un poco más claro (slate-700) para el brillo */
      #1e293b 100%
    );
    background-size: 200% 100%;
    animation: ${shimmer} 1.5s infinite linear;
  }
`;