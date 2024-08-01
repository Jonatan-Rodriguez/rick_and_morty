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
import top1 from '../../assets/img/265.jpeg';
import top2 from '../../assets/img/118.jpeg';
import top3 from '../../assets/img/119.jpeg';
import top4 from '../../assets/img/242.jpeg';
import top5 from '../../assets/img/672.jpeg';
import top6 from '../../assets/img/175.jpeg';

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={25}
                            slidesPerView={3}
                            navigation={{nextEl:'.swiper-button-next', prevEl:'.swiper-button-prev'}}
                            pagination={{ clickable: true }}
                            autoplay={{delay:3000, disableOnInteraction:false}}
                            breakpoints={{
                                "@0.00":{
                                    slidesPerView:1,
                                    spaceBetween:25,
                                },
                                "@0.50":{
                                    slidesPerView:1,
                                    spaceBetween:25,
                                },
                                "@1.00":{
                                    slidesPerView:1.5,
                                    spaceBetween:25,
                                },
                                "@1.50":{
                                    slidesPerView:2,
                                    spaceBetween:25,
                                },
                                "@1.60":{
                                    slidesPerView:2.5,
                                    spaceBetween:25,
                                },
                                "@1.75":{
                                    slidesPerView:3,
                                    spaceBetween:25,
                                },
                            }}
                        >
                            <SwiperSlide><CardLandingTop key='1' name='Pickle Rick' image={top1} location='Tierra (C-137)' like='5' /></SwiperSlide>
                            <SwiperSlide><CardLandingTop key='2' name='Evil Morty' image={top2} location='Desconocido' like='4' /></SwiperSlide>
                            <SwiperSlide><CardLandingTop key='3' name='Evil Rick' image={top3} location='Desconocido' like='3.5' /></SwiperSlide>
                            <SwiperSlide><CardLandingTop key='4' name='Mr. Meeseeks' image={top4} location='Mr. Meeseeks Box.' like='3' /></SwiperSlide>
                            <SwiperSlide><CardLandingTop key='5' name='Mr. Nimbus' image={top5} location='El océano' like='2' /></SwiperSlide>
                            <SwiperSlide><CardLandingTop key='6' name='Jerry Smith' image={top6} location='Tierra (C-137)' like='1.5' /></SwiperSlide>
                        </Swiper>
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