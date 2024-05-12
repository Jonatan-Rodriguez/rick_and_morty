import {connect, useDispatch} from 'react-redux';
import Card from '../../components/Card/Card';
import { filterCards, orderCards } from '../../redux/action';
import { useState } from 'react';
import {ContainerFavorite} from './favorites.styled';
import fav from '../../assets/img/favoritos.svg';
import down from '../../assets/img/arrow.svg';

const Favorites = (props) => {
    
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(true);
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    }
    
    return(
        <ContainerFavorite>
            <div className='titleFilter'>
                <div className='containerTitle'>
                    <img src={fav} alt="favoritos" />
                    <h2 className='title'>Favoritos</h2>
                </div>
                {/* <div className='containerFilter'>
                    <p>Filtrar por:</p>
                    <div className='selectContainer'>
                        <select className='selectBox' onChange={handleFilter}>
                            <option value="all">All</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Genderless">Genderless</option>
                            <option value="unknown">Unknown</option>
                        </select>
                        <div className='iconContainer'>
                            <img src={down} alt="filtros" />
                        </div>
                    </div>
                    <div className='selectContainer'>
                        <select className='selectBox' onChange={handleOrder}>
                            <option value="A">Ascendente</option>
                            <option value="D">Descendente</option> 
                        </select>
                        <div className='iconContainer'>
                            <img src={down} alt="filtros" />
                        </div>
                    </div>
                </div> */}
            </div>
            <div className='favorites'>
                {props.myFavorites?.map(fav => {
                    return (
                        <Card
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            status={fav.status}
                            species={fav.species}
                            /* gender={fav.gender} */
                            origin={fav.origin}
                            image={fav.image}
                        />
                    )
                })}
            </div>
        </ContainerFavorite>
    )
}

const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
    };
}

export default connect(
    mapStateToProps,//me permite acceder al estado global
    null//me permite despachar action
)(Favorites);