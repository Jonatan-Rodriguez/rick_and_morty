import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import { addFav, removeFav } from "../redux/action";
import { useState, useEffect } from "react";

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
      /* props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      }); */
      console.log(props)
   }, [props.myFavorites]);

   return (
      <div>
         <button onClick={handleFavorite}>{isFav?'❤️':'🤍'}</button>
         <button onClick={()=>{props.onClose(props.id)}}>X</button>
         <Link to={`/detail/${props.id}`}>
            <h2>{props.name}</h2>
         </Link>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <img src={props.image} alt='' />
      </div>
   );
};

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myfavorites
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
