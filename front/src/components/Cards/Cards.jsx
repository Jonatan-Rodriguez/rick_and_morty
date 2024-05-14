import { useEffect } from 'react';
import { getFav } from '../../redux/action';
import {connect} from 'react-redux';
import Card from '../Card/Card';
import { ContainerCards } from './cards.style';
/* import SearchBar from '../SearchBar/SearchBar';
import dado from '../../assets/img/dado.svg';
import logoHome from '../../assets/img/rickLogo.svg';
import smile from '../../assets/img/smiley.svg' */

const Cards = (props) => {

   useEffect(() => {
      getFav();
   }, []);

   return (
      <ContainerCards>
         
         {props.characters.map(element => {
            return (
            <Card
               key={element.id}
               id={element.id}
               name={element.name}
               status={element.status}
               species={element.species}
               gender={element.gender}
               origin={element.origin.name}
               image={element.image}
               onClose={props.onClose}
            />
            )})
         }
      </ContainerCards>
   );
}

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   };
}

const mapDispatchToProps = (dispatch) => {
   return{
      getFav: () => {dispatch(getFav())},
   }
}

export default connect(
   mapStateToProps,//me permite acceder al estado global
   mapDispatchToProps//me permite despachar action
)(Cards);
