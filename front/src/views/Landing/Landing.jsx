import React from 'react';
import { Link } from 'react-router-dom';

import {
  ContainerLanding,
  NebulaLayer,
  PortalRing,
  MainContent,
  Title,
  Subtitle,
  StyledPortalButton,
  Footer,
  SocialGlass
} from './landing.styled';

const Landing = () => {
    return (
        <ContainerLanding>
            <NebulaLayer />
            <NebulaLayer className="secondary" />
            
            {/* CORRECCIÓN AQUÍ: Usamos $size, $variant, $reverse, $duration */}
            <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', inset: 0, pointerEvents: 'none' }}>
                <PortalRing $size="600px" />
                <PortalRing $size="500px" $variant="accent" $reverse $duration="25s" />
                <PortalRing $size="400px" />
            </div>

            <MainContent>
                <Title>
                    <span className="title-glow">Rick & Morty</span>
                    <br />
                    <span className="subtitle-glow">Wiki</span>
                </Title>

                <Subtitle>
                    Entérate de todo en un solo lugar.
                    <br />
                    Personajes, ubicaciones, episodios y más.
                </Subtitle>

                <Link to='/home'>
                    <StyledPortalButton>
                        <div className="glow-ring" />
                        <div className="portal-swirl-container">
                            <div className="portal-swirl" />
                        </div>
                        <div className="button-core">
                            <span>Ingresar al Portal</span>
                        </div>
                    </StyledPortalButton>
                </Link>
            </MainContent>

            <Footer>
                <SocialGlass>
                    <a href="#" onClick={(e) => e.preventDefault()}>GitHub</a>
                    <a href="#" onClick={(e) => e.preventDefault()}>Linkdin</a>
                </SocialGlass>
            </Footer>
        </ContainerLanding>
    )
}

export default Landing;