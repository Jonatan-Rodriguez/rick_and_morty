import { Link } from 'react-router-dom';
//styled
import { ContainerLanding } from './landing.styled';
//component
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary';
//img
import rick from '../../assets/img/rick2.png';
import rickLogo from '../../assets/img/rickLogo.svg';

const Landing = () => {
    return (
        <ContainerLanding>
            <div className='textContainer'>
                <img src={rickLogo} alt="logo" />
                <div className='textBox'>
                    <p className='text'>
                        Entérate de todo en un <span>lugar</span>.
                    </p>
                    <p className='textMin'>
                        Personajes, ubicaciones, episodios y más.
                    </p>
                </div>
                <Link to='/home'>
                    <ButtonPrimary name='Ingresar'/>
                </Link>
            </div>
            <div className='imgContainer'>
                <img src={rick} alt="rick imagen" />
            </div>
        </ContainerLanding>
    )
}

export default Landing;