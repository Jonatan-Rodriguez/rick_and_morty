import { Link, useLocation } from "react-router-dom";
import {connect} from 'react-redux';
import { addFav, removeFav } from "../../redux/action";
import { useState, useEffect } from "react";
import {CardContainer} from './card.style'
import delet from '../../assets/img/delet.svg';
import alien from '../../assets/img/alien.svg';
import planet from '../../assets/img/planet.svg';
import pulso from '../../assets/img/pulse.svg';
import info from '../../assets/img/info.svg';

function Card(props) {

   const [isFav, setIsFav] = useState(false);
   const location = useLocation();

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
            <img className='infoIco' src={info}/>
            <p>Saber mas</p>
            </div>
            </Link>
         </div>
         <div className="dataContainer">
            <div className="dataInfo">
               <h2>{props.name}</h2>
               <p><img src={pulso} />{props.status}</p>
               <p><img src={alien} />{props.species}</p>
               {/* <h2>{props.gender}</h2> */}
               <p><img src={planet} />{props.origin}</p>
            </div>
            <div className="btnLike">
               <div className="likeIco" onClick={handleFavorite}>
                  {isFav?'❤️':'🤍'}
               </div>
            </div>
         </div>
         <div className="btnDelete">
            {
               location.pathname !== '/favorites' && 
               <button className="button" onClick={()=>{props.onClose(props.id)}}>
                  <span className="button__text">Eliminar</span>
                  <span className="button__icon"><img src={delet}/></span>
               </button>
            }
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
