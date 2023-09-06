import {connect} from 'react-redux';
import Card from './Card';

const Favorites = (props) => {

    return(
        <div>
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