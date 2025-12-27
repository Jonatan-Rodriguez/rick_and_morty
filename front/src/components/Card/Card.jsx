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
   const { id, name, status, species, origin, image, myFavorites, addFav, removeFav, onClose } = props;
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
      // Recorremos los favoritos
      myFavorites.forEach((fav) => {
         // SOLUCIÓN: Convertimos ambos a String para comparar
         // Así "1" (String DB) será igual a "1" (String convertido de la API)
         if (fav.id.toString() === id.toString()) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   return (
      <CardContainer>
         <div className="imgContainer">
            {onClose && (
               <button 
                  className="btnDelete" 
                  onClick={() => onClose(id)} 
                  style={{ 
                     position: 'absolute', 
                     top: '10px', 
                     right: '10px', 
                     background: 'red', 
                     color: 'white', 
                     border: 'none', 
                     borderRadius: '5px',
                     cursor: 'pointer',
                     padding: '5px 10px',
                     zIndex: 10
                  }}
               >
                  X
               </button>
            )}
            <Link to={`/detail/${id}`}>
               <img src={image} alt={name} />
               <div className="overlay">
                  <img className='infoIco' alt="ico" src={info} />
                  <p>Saber más</p>
               </div>
            </Link>
         </div>
         <div className="dataContainer">
            <div className="dataInfo">
               <h2>{name}</h2>
               <p><img src={pulso} alt="pulso" />{status}</p>
               <p><img src={alien} alt="alien" />{species}</p>
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