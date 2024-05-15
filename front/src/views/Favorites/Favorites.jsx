import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import { ContainerFavorite } from './favorites.styled';
import fav from '../../assets/img/favoritos.svg';
import FilterFav from '../../components/FilterFav/FilterFav';

const Favorites = (props) => {
    
    return(
        <ContainerFavorite>
            <div className='titleFilter'>
                <div className='containerTitle'>
                    <img src={fav} alt="favoritos" />
                    <h2 className='title'>Favoritos</h2>
                </div>
                <FilterFav/>
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