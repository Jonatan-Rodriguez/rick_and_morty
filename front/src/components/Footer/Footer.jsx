import React from 'react';
import { useLocation } from 'react-router-dom';
// Iconos
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
// Estilos
import {
  FooterContainer,
  FooterContent,
  BrandColumn,
  FooterLogo,
  BrandDesc,
  LinksColumn,
  ColumnTitle,
  FooterLink,
  SocialColumn,
  SocialIcons,
  CopyrightBar
} from './footer.styled';

const Footer = () => {
    const location = useLocation();

    if (location.pathname === '/') return null;

    return (
        <FooterContainer>
            <FooterContent>
                {/* 1. MARCA */}
                <BrandColumn>
                    <FooterLogo>
                        <div className="logo-circle">RM</div>
                        <span>Rick & Morty</span>
                    </FooterLogo>
                    <BrandDesc>
                        Explora el multiverso, colecciona personajes y gestiona tu propia base de datos interdimensional. Proyecto desarrollado con pasión y código limpio.
                    </BrandDesc>
                </BrandColumn>

                {/* 2. NAVEGACIÓN */}
                <LinksColumn>
                    <ColumnTitle>Explorar</ColumnTitle>
                    <FooterLink to="/home">Inicio</FooterLink>
                    <FooterLink to="/favorites">Mis Favoritos</FooterLink>
                    <FooterLink to="/my-creations">Mis Creaciones</FooterLink>
                    <FooterLink to="/create">Crear Personaje</FooterLink>
                    <FooterLink to="/about">Sobre Mí</FooterLink>
                </LinksColumn>

                {/* 3. CONTACTO / SOCIAL */}
                <SocialColumn>
                    <ColumnTitle>Conecta</ColumnTitle>
                    <BrandDesc>
                        ¿Tienes alguna idea o feedback? ¡Me encantaría escucharte!
                    </BrandDesc>
                    <SocialIcons>
                        <a 
                            href="https://github.com/Jonatan-Rodriguez/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/jonatan-j-rodriguez/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a 
                            href="mailto:jonatarodriguez1998@gmail.com"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </a>
                    </SocialIcons>
                </SocialColumn>
            </FooterContent>

            {/* 4. BARRA COPYRIGHT */}
            <CopyrightBar>
                <span>© 2024 Rick & Morty Wiki. Todos los derechos reservados.</span>
                <span>
                    Hecho con <Heart size={14} fill="#ef4444" color="#ef4444" style={{ display: 'inline', margin: '0 3px' }} /> por 
                    <span className="highlight"> Jona </span>
                </span>
            </CopyrightBar>
        </FooterContainer>
    );
};

export default Footer;