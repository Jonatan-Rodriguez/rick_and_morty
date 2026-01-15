import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Iconos Lucide
import { Home, ArrowLeft, AlertTriangle } from "lucide-react";
// Estilos
import {
  ErrorContainer,
  GlassCard,
  BrokenPortalWrapper,
  GlitchRing,
  IconWrapper,
  ErrorTitle,
  ErrorSubtitle,
  ErrorDescription,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton
} from './error.styled';

const Error = () => {
    const navigate = useNavigate();

    return(
        <ErrorContainer>
            <GlassCard>
                {/* Elemento Visual: Portal Roto */}
                <BrokenPortalWrapper>
                    <GlitchRing />
                    <IconWrapper>
                        <AlertTriangle size={64} />
                    </IconWrapper>
                </BrokenPortalWrapper>
                
                {/* Texto Principal con efecto Glitch */}
                <ErrorTitle>404</ErrorTitle>
                
                <ErrorSubtitle>Dimensión No Encontrada</ErrorSubtitle>
                
                {/* Descripción temática */}
                <ErrorDescription>
                    ¡Wubba Lubba Dub Dub! Parece que el portal se desestabilizó y aterrizaste en una realidad que no existe. Morty probablemente tocó algo que no debía.
                </ErrorDescription>
                
                {/* Botones de Acción */}
                <ButtonGroup>
                    <Link to="/home" style={{ textDecoration: 'none' }}>
                        <PrimaryButton>
                            <Home size={20} />
                            Volver a la Dimensión C-137
                        </PrimaryButton>
                    </Link>

                    <SecondaryButton onClick={() => navigate(-1)}>
                        <ArrowLeft size={20} />
                        Regresar
                    </SecondaryButton>
                </ButtonGroup>
            </GlassCard>
        </ErrorContainer>
    )
}

export default Error;