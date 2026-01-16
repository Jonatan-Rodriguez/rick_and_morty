import React from 'react';
// Iconos
import { Github, Linkedin, Mail } from 'lucide-react';
// Estilos
import {
  AboutContainer,
  ProfileCard,
  ImageSection,
  AvatarWrapper,
  ProfileImage,
  InfoSection,
  Name,
  Role,
  Bio,
  TechStack,
  TechBadge,
  SocialLinks
} from './about.styled';

const About = () => {
    const techStack = [
        "React",
        "Redux",
        "Styled Components",
        "Node.js",
        "Express",
        "Sequelize",
        "PostgreSQL"
    ];

    return (
        <AboutContainer>
            <ProfileCard>
                {/* 1. FOTO DE PERFIL */}
                <ImageSection>
                    <AvatarWrapper>
                        {/* Puedes poner tu foto real aquí o un avatar de Rick */}
                        <ProfileImage 
                            src="https://avatars.githubusercontent.com/u/137853210?v=4" 
                            alt="Profile" 
                        />
                    </AvatarWrapper>
                </ImageSection>

                {/* 2. INFORMACIÓN */}
                <InfoSection>
                    <div>
                        <Name>Jonatan <span>Rodriguez</span></Name>
                        <Role>Full Stack Developer</Role>
                    </div>

                    <Bio>
                        ¡Hola! Soy el creador de este portal dimensional. 
                        Me apasiona el desarrollo web y crear experiencias de usuario únicas. 
                        Este proyecto fue construido para demostrar mis habilidades en el stack PERN 
                        (Postgres, Express, React, Node) integrando la API de Rick & Morty.
                    </Bio>

                    {/* 3. STACK TECNOLÓGICO */}
                    <TechStack>
                        {techStack.map((tech, index) => (
                            <TechBadge key={index}>
                                {tech}
                            </TechBadge>
                        ))}
                    </TechStack>

                    {/* 4. REDES SOCIALES */}
                    <SocialLinks>
                        <a 
                            href="https://github.com/Jonatan-Rodriguez/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <Github size={22} />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/jonatan-j-rodriguez/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={22} />
                        </a>
                        <a 
                            href="mailto:jonatarodriguez1998@gmail.com"
                            aria-label="Email"
                        >
                            <Mail size={22} />
                        </a>
                    </SocialLinks>
                </InfoSection>
            </ProfileCard>
        </AboutContainer>
    );
}

export default About;