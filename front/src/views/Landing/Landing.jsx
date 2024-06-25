import { Link } from 'react-router-dom';
//styled
import { ContainerLanding } from './landing.styled';
//component
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary';
//img
import backgroundLanding from '../../assets/img/BackgroundLanding.svg';
import imgLanding from '../../assets/img/imgLanding.svg';

const Landing = () => {
    return (
        <ContainerLanding backgroundImage={backgroundLanding} imgLanding={imgLanding}>
            <section className='section1'>
                <div className='section1ImgBackground'>
                    <div className='boxTextBtn'>
                        <h1>ENTERATE DE TODO EN UN SOLO <span>LUGAR</span>.</h1>
                        <p>Personajes, ubicaciones, episodios y más.</p>
                        <Link to='/home'>
                            <button className="uiverse">
                                <div className="wrapper">
                                    <span>EXPLORAR</span>
                                    <div className="circle circle-5"></div>
                                    <div className="circle circle-4"></div>
                                    <div className="circle circle-3"></div>
                                    <div className="circle circle-2"></div>
                                    <div className="circle circle-1"></div>
                                </div>
                            </button>
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

                    </div>
                    <div className='text'>
                        <h2>

                        </h2>
                        <ButtonPrimary name='Crea tu propio personaje'/>
                    </div>
                </div>
            </section>
        </ContainerLanding>
    )
}

export default Landing;