import { useEffect } from 'react';
import { getFav } from '../../redux/action';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import { ContainerCards } from './cards.style';

const Cards = (props) => {

   useEffect(() => {
      getFav();
   }, []);

   return (
      <ContainerCards>
         
         {props.allCharacters.map(element => {
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
            />
            )})
         }
      </ContainerCards>
   );
}

const mapStateToProps = (state) => {
   return{
      allCharacters: state.allCharacters
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
