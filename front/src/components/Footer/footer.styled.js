import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  width: 100%;
  background: rgba(15, 23, 42, 0.8);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3rem 1rem 1.5rem;
  margin-top: auto;
  box-shadow: 0 -20px 40px -20px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
`;

export const FooterContent = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
  }
`;

// --- COLUMNA 1: MARCA ---
export const BrandColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  .logo-circle {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: rgba(134, 239, 172, 0.1);
    border: 1px solid var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
    font-weight: 800;
    box-shadow: 0 0 10px rgba(34, 197, 94, 0.2);
  }

  span {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    letter-spacing: -0.5px;
  }
`;

export const BrandDesc = styled.p`
  color: #9ca3af;
  font-size: 0.95rem;
  line-height: 1.6;
  max-width: 300px;
`;

// --- COLUMNA 2: ENLACES ---
export const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ColumnTitle = styled.h3`
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    width: 4px;
    height: 16px;
    background: var(--primary);
    border-radius: 2px;
    display: block;
  }
`;

export const FooterLink = styled(Link)`
  color: #94a3b8;
  text-decoration: none;
  transition: all 0.2s;
  width: fit-content;
  
  &:hover {
    color: var(--primary);
    transform: translateX(5px);
  }
`;

// --- COLUMNA 3: SOCIAL ---
export const SocialColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.75rem;
    background: rgba(255, 255, 255, 0.05);
    color: #9ca3af;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s;

    &:hover {
      background: var(--primary);
      color: black;
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(34, 197, 94, 0.3);
    }
  }
`;

// --- BARRA INFERIOR (COPYRIGHT) ---
export const CopyrightBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 3rem;
  padding-top: 1.5rem;
  text-align: center;
  color: #64748b;
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
  
  span.highlight {
    color: var(--primary);
    font-weight: 600;
  }
`;