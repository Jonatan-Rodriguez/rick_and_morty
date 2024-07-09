//styled
import { ContainerCardLandingTop } from './cardLandingTop.styled';
//img
import locationLog from '../../assets/img/location.svg';

const CardLandingTop = ({ name, location, image, like }) => {

    return (
        <ContainerCardLandingTop image={image}>
            <div className='img' />
            <div className='textInfo'>
                <div className='text'>
                    <p className='cardName'>{name}</p>
                    <p className='cardLocation'><img src={locationLog} alt={name} />{location}</p>
                </div>
                <div className='like'>
                    <p>{like}K🤍</p>
                </div>
            </div>
        </ContainerCardLandingTop>
    )
}

export default CardLandingTop;