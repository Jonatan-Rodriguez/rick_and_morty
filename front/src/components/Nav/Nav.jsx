import React, { useState } from 'react';
// Iconos modernos (Instalar con: npm install lucide-react)
import { Home, Heart, User, Plus, LogOut, Menu, X } from "lucide-react";

import { 
  NavContainer, 
  NavContent, 
  LogoLink, 
  DesktopMenu, 
  MobileToggle, 
  MobileMenu 
} from "./nav.style.js"; // Asegúrate de que coincida con el nombre de tu archivo (nav.style.js o nav.styled.js)
import BtnNav from "../BtnNav/BtnNav.jsx";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/home", label: "Inicio", icon: Home },
        { href: "/favorites", label: "Favoritos", icon: Heart },
        { href: "/my-creations", label: "Mis Personajes", icon: User },
        { href: "/create", label: "Crear", icon: Plus },
    ];

    return (
        <>
            <NavContainer>
                <NavContent>
                    {/* LOGO (Diseño CSS puro, sin imágenes) */}
                    <LogoLink to='/home'>
                        <div className="logo-circle">
                            <span>RM</span>
                        </div>
                        <span className="logo-text">Rick & Morty</span>
                    </LogoLink>

                    {/* MENÚ DE ESCRITORIO */}
                    <DesktopMenu>
                        {navLinks.map((link) => (
                            <BtnNav 
                                key={link.href}
                                rute={link.href}
                                text={link.label}
                                Icon={link.icon} 
                            />
                        ))}
                        
                        <div className="separator" />

                        <BtnNav 
                            rute="/"
                            text="Salir"
                            Icon={LogOut}
                            className="exit-btn"
                        />
                    </DesktopMenu>

                    {/* BOTÓN HAMBURGUESA (Móvil) */}
                    <MobileToggle onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
                        {isOpen ? <X /> : <Menu />}
                    </MobileToggle>
                </NavContent>
            </NavContainer>

            {/* MENÚ DESPLEGABLE MÓVIL */}
            <MobileMenu $isOpen={isOpen}>
                {navLinks.map((link) => (
                    <BtnNav 
                        key={link.href}
                        rute={link.href}
                        text={link.label}
                        Icon={link.icon}
                        onClick={() => setIsOpen(false)}
                    />
                ))}
                
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '0.5rem 0' }} />
                
                <BtnNav 
                    rute="/"
                    text="Salir del Portal"
                    Icon={LogOut}
                    className="exit-btn"
                    onClick={() => setIsOpen(false)}
                />
            </MobileMenu>
        </>
    );
}

export default Nav;