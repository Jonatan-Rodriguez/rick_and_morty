import { Link } from "react-router-dom";
import {connect} from 'react-redux';
//action
import { addFav, removeFav } from "../../redux/action";
//hooks
import { useState, useEffect } from "react";
//styled
import {CardContainer} from './card.style'
//assets
import alien from '../../assets/img/alien.svg';
import planet from '../../assets/img/planet.svg';
import pulso from '../../assets/img/pulse.svg';
import info from '../../assets/img/info.svg';

function Card(props) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         props.removeFav(props.id);
      }else {
         setIsFav(true);
         props.addFav(props);
      }
   }

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   return (
      <CardContainer>
         <div className="imgContainer">
            <Link to={`/detail/${props.id}`}>
               <img src={props.image} alt={props.name} />
            <div className="overlay">
            <img className='infoIco' alt="ico" src={info}/>
            <p>Saber mas</p>
            </div>
            </Link>
         </div>
         <div className="dataContainer">
            <div className="dataInfo">
               <h2>{props.name}</h2>
               <p><img src={pulso} alt="pulso" />{props.status}</p>
               <p><img src={alien} alt="alien" />{props.species}</p>
               <p><img src={planet} alt="planet" />{props.origin}</p>
            </div>
            <div className="btnLike">
               <div className="likeIco" onClick={handleFavorite}>
                  {isFav?'❤️':'🤍'}
               </div>
            </div>
         </div>
         <div className="btnDelete">
         </div>
      </CardContainer>
   );
};

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   };
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

export default connect(
   mapStateToProps,//me permite acceder al estado global
   mapDispatchToProps//me permite despachar action
)(Card);
