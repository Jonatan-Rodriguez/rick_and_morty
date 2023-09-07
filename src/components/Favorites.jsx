import {connect, useDispatch} from 'react-redux';
import Card from './Card';
import { filterCards, orderCards } from '../redux/action';
import { useState } from 'react';

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
        <div>
            <select onClick={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option> 
            </select>
            <select onClick={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                <option value="all">all</option>
            </select>
            {/* <Cards characters={props.myFavorites}/> */}
            {props.myFavorites?.map(fav => {
                return (
                    <Card
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        status={fav.status}
                        species={fav.species}
                        gender={fav.gender}
                        origin={fav.origin.name}
                        image={fav.image}
                    />
                )
            })}
        </div>
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