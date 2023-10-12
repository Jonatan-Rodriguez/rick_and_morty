import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { ContainerDetail } from './detail.styled';
import pulso from '../../assets/img/pulse.svg';
import alien from '../../assets/img/alien.svg';
import planet from '../../assets/img/planet.svg';
import gender from '../../assets/img/gender.svg';
import play from '../../assets/img/play.svg';
import mapPin from '../../assets/img/mapPin.svg';
import typ from '../../assets/img/type.svg';

const Detail = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState({});

    //https://rickandmortyapi.com/api/character/${id}
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    return(
        <ContainerDetail>
            <div className="card">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="card-inner">
                    <div className='containerCard'>
                        <div className='containerImg'>
                            <img className='img' src={character?.image} alt={character?.name} />
                        </div>
                        <div className='containerData'>
                            <h1 className='name'>{character?.name}</h1>
                            <div className='data'><img src={play} alt="episodios" /><p>Participo en {character?.episode?.length} episodios.</p></div>
                            <div className='data'><img src={pulso} alt="estado" /><p>Status: {character?.status}.</p></div>
                            <div className='data'><img src={alien} alt="especie" /><p>Species: {character?.species}.</p></div>
                            {character?.type?
                                <div className='data'><img src={typ} alt="tipo" /><p>Type: {character?.type}.</p></div>
                                : <></>
                            }
                            <div className='data'><img src={gender} alt="genero" /><p>Gender: {character?.gender}.</p></div>
                            <div className='data'><img src={planet} alt="origen" /><p>Origin: {character?.origin?.name}.</p></div>
                            <div className='data'><img src={mapPin} alt="localizacion" /><p>Location: {character?.location?.name}.</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerDetail>
    )
}
export default Detail;