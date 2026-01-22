import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: var(--background);
  /* Patrón de estrellas consistente */
  background-image: 
    radial-gradient(2px 2px at 20px 30px, rgba(255, 255, 255, 0.3), transparent),
    radial-gradient(2px 2px at 40px 70px, rgba(255, 255, 255, 0.2), transparent);
  background-size: 200px 200px;
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 48rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const HeaderSection = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--foreground);
  margin-bottom: 0.5rem;
  letter-spacing: -0.025em;
`;

export const Subtitle = styled.p`
  color: #9ca3af;
  font-size: 1.1rem;
`;

export const FormCard = styled.form`
  background: rgba(30, 41, 59, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    
    .full-width, .col-span-2 {
      grid-column: span 2;
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: #e2e8f0;
  margin-left: 0.25rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  /* Icono Izquierdo */
  .icon {
    position: absolute;
    left: 1rem;
    color: #94a3b8;
    pointer-events: none;
  }

  /* Icono Flecha Derecha (Selects) */
  .arrow-icon {
    position: absolute;
    right: 1rem;
    color: #94a3b8;
    pointer-events: none;
  }
`;

const fieldStyles = `
  width: 100%;
  height: 3rem;
  padding-left: 3rem; /* Espacio para el icono */
  padding-right: 1rem;
  background-color: rgba(15, 23, 42, 0.6); /* Fondo más oscuro para inputs */
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  color: white;
  font-size: 0.95rem;
  font-family: inherit;
  outline: none;
  transition: all 0.2s ease;

  &::placeholder {
    color: #64748b;
  }

  &:focus {
    border-color: var(--primary); /* Verde Neón */
    box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.1); /* Ring verde suave */
    background-color: rgba(15, 23, 42, 0.8);
  }
`;

export const StyledInput = styled.input`
  ${fieldStyles}
`;

export const StyledSelect = styled.select`
  ${fieldStyles}
  appearance: none;
  cursor: pointer;

  option {
    background-color: #0f172a;
    color: white;
    padding: 10px;
  }
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  height: 3.5rem;
  background: var(--primary);
  color: black;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 0 20px rgba(34, 197, 94, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 30px rgba(34, 197, 94, 0.4);
    opacity: 0.9;
  }

  &:active {
    transform: translateY(0);
  }
`;