import { ContainerFooter } from "./footer.styled";
//img
import logo from '../../assets/img/logo.svg';

const Footer = () => {

    return(
        <ContainerFooter logoImg={logo}>
            <div className="boxTop">
                <div className="image"></div>
                <div className="link">
                    <div className="pages">
                        <p>About</p>
                        <p>Home</p>
                        <p>Creaciones</p>
                    </div>
                    <div className="social">
                        <div className="ico">ico</div>
                        <div className="ico">ico</div>
                        <div className="ico">ico</div>
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