import { Link } from 'react-router-dom';
//styled
import { ContainerLanding } from './landing.styled';
//component
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../../components/ButtonSecondary/ButtonSecondary';
import CardLandingTop from '../../components/CardLandingTop/CardLandingTop';
//img
import backgroundLanding from '../../assets/img/BackgroundLanding.svg';
import imgLanding from '../../assets/img/imgLanding.svg';
import location from '../../assets/img/location.svg';
import rickLanding from '../../assets/img/RickLanding.jpg';

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, Zoom, Grid } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import 'swiper/css/grid';

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
                <div className='carruselText'>
                    <div className='textBtn'>
                        <p>Personajes Populares</p>
                        <div className='btn'>
                            <div className='btnPrev swiper-button-prev'></div>
                            <div className='btnNext swiper-button-next'></div>
                        </div>
                    </div>
                    <div className='carrusel'>
                    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay, Zoom, Grid]}
      spaceBetween={20}
      slidesPerView={3}
      navigation={{nextEl:'.swiper-button-next', prevEl:'.swiper-button-prev'}}
      pagination={{ clickable: true }}/* 
      autoplay={{delay:5000, disableOnInteraction:true}} */
      zoom={{maxRatio:5}}
      grid={{rows:1}}
    >
      <SwiperSlide><CardLandingTop key='1' name='Morty' image={rickLanding} location='C-123' like='20' /></SwiperSlide>
      <SwiperSlide><CardLandingTop key='2' name='Morty' image={rickLanding} location='C-123' like='20' /></SwiperSlide>
      <SwiperSlide><CardLandingTop key='3' name='Morty' image={rickLanding} location='C-123' like='20' /></SwiperSlide>
      <SwiperSlide><CardLandingTop key='4' name='Morty' image={rickLanding} location='C-123' like='20' /></SwiperSlide>
      
    </Swiper>
                        {/* <CardLandingTop key='1' name='Morty' image={rickLanding} location='C-123' like='20' />
                        <CardLandingTop key='2' name='Morty' image={rickLanding} location='C-123' like='20' />
                        <CardLandingTop key='3' name='Morty' image={rickLanding} location='C-123' like='20' /> */}
                    </div>
                </div>
            </section>
            <section className='section3'>
                <div className='cardText'>
                    <div className='card'>
                        <div className='img' />
                        <div className='textInfo'>
                            <p className='cardName'>Rick Criminal</p>
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