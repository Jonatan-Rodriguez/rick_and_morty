import { Link } from "react-router-dom";
import { connect } from 'react-redux';
//action
import { addFav, removeFav } from "../../redux/action";
//hooks
import { useState, useEffect } from "react";
//styled
import { CardContainer } from './card.style';
//img
import alien from '../../assets/img/alien.svg';
import planet from '../../assets/img/planet.svg';
import pulso from '../../assets/img/pulse.svg';
import info from '../../assets/img/info.svg';

function Card(props) {
   const { id, name, status, species, origin, image, myFavorites, addFav, removeFav } = props;
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({ id, name, status, species, origin, image });
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   return (
      <CardContainer>
         <div className="imgContainer">
            <Link to={`/detail/${id}`}>
               <img src={image} alt={name} />
               {/* <div className="overlay">
                  <img className='infoIco' alt="ico" src={info} />
                  <p>Saber más</p>
               </div> */}
            </Link>
         </div>
         <div className="dataContainer">
            <div className="dataInfo">
               <h2>{name}</h2>
               <p><img src={planet} alt="planet" />{origin}</p>
            </div>
            <div className="btnLike">
               <div className="likeIco" onClick={handleFavorite}>
                  {isFav ? '❤️' : '🤍'}
               </div>
            </div>
         </div>
      </CardContainer>
   );
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   };
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   };
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);