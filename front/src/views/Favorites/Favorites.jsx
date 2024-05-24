import { ContainerFavorite } from './favorites.styled';
import { connect } from 'react-redux';
import { getFav } from '../../redux/action';
import { useEffect } from 'react';
import Card from '../../components/Card/Card';
import FilterFav from '../../components/FilterFav/FilterFav';
import fav from '../../assets/img/favoritos.svg';

const Favorites = (props) => {

    useEffect(() => {
        props.getFav();
    }, []);

    return (
        <ContainerFavorite>
            <div className='titleFilter'>
                <div className='containerTitle'>
                    <img src={fav} alt="favoritos" />
                    <h2 className='title'>Favoritos</h2>
                </div>
                {/* <FilterFav /> */}
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
    return {
        myFavorites: state.myFavorites
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFav: () => { dispatch(getFav()) },
    }
}

export default connect(
    mapStateToProps,//me permite acceder al estado global
    mapDispatchToProps//me permite despachar action
)(Favorites);