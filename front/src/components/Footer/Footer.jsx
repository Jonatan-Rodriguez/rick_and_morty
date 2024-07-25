import { ContainerFooter } from "./footer.styled";
import { NavLink } from "react-router-dom";
//img
import logo from '../../assets/img/logo.svg';

const Footer = () => {

    return(
        <ContainerFooter logoImg={logo}>
            <div className="boxTop">
                <div className="image"></div>
                <div className="link">
                    <div className="pages">
                        <NavLink to='/about'>
                            <p>About</p>
                        </NavLink>
                        <NavLink to='/home'>
                            <p>Home</p>
                        </NavLink>
                        <NavLink to='/'>
                            <p>Creaciones</p>
                        </NavLink>
                        <NavLink to='/favorites'>
                            <p>Favoritos</p>
                        </NavLink>
                    </div>
                    <div className="social">
                        <div className="ico">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><g fill="none"><g clip-path="url(#primeTwitter0)"><path fill="black" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"/></g><defs><clipPath id="primeTwitter0"><path fill="#fff" d="M0 0h14v14H0z"/></clipPath></defs></g></svg>
                        </div>
                        <div className="ico">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>
                        </div>
                        <div className="ico">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="boxBottom">
                <p className="footerText">© 2024 Rick and Morty Fan Site. Todos los derechos reservados. Este sitio no está afiliado ni patrocinado por Adult Swim o los creadores de Rick and Morty.</p>
            </div>
        </ContainerFooter>
    )
}

export default Footer;