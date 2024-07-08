import { Link } from 'react-router-dom';
//styled
import { ContainerLanding } from './landing.styled';
//component
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../../components/ButtonSecondary/ButtonSecondary';
//img
import backgroundLanding from '../../assets/img/BackgroundLanding.svg';
import imgLanding from '../../assets/img/imgLanding.svg';
import location from '../../assets/img/location.svg';
import rickLanding from '../../assets/img/RickLanding.jpg';

const Landing = () => {
    return (
        <ContainerLanding backgroundImage={backgroundLanding} imgLanding={imgLanding} imgCard={rickLanding}>
            <section className='section1'>
                <div className='section1ImgBackground'>
                    <div className='boxTextBtn'>
                        <h1>ENTERATE DE TODO EN UN SOLO <span>LUGAR</span>.</h1>
                        <p>Personajes, ubicaciones, episodios y más.</p>
                        <Link to='/home'>
                            <ButtonPrimary name='EXPLORAR' />
                        </Link>
                    </div>
                    <div className='imgLanding'></div>
                </div>
            </section>
            <section className='section2'>
                <div className='carrusel'>

                </div>
            </section>
            <section className='section3'>
                <div className='cardText'>
                    <div className='card'>
                        <div className='img' />
                        <div className='textInfo'>
                            <p className='cardName'>Rick Ricoso</p>
                            <p className='cardLocation'><img src={location} alt="" />C-145</p>
                        </div>
                    </div>
                    <div className='text'>
                        <h2>
                            Crea tu propio personaje
                        </h2>
                        <p>Diseña tu propia tarjeta de Rick and Morty para la comunidad.</p>
                        <ButtonSecondary name='Crea tu propio personaje' />
                    </div>
                </div>
            </section>
        </ContainerLanding>
    )
}

export default Landing;