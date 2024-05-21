import { connect } from 'react-redux';
//hooks
import { useEffect } from 'react';
//actions
import { getFav } from '../../redux/action';
//components
import Card from '../Card/Card';
import SkeletonLoading from '../SkeletonLoading/SkeletonLoading';
import NoResults from '../NoResults/NoResults';
//styled
import { ContainerCards } from './cards.style';

const Cards = (props) => {

   useEffect(() => {
      getFav();
   }, []);

   if (props.loading) {
      return (
          <ContainerCards>
              {Array(20).fill(0).map((_, index) => (
                  <SkeletonLoading key={index} />
              ))}
          </ContainerCards>
      );
   }

   if (props.noResults) {
      return (
          <ContainerCards>
              <NoResults/>
          </ContainerCards>
      );
   }

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
      allCharacters: state.allCharacters,
      loading: state.loading,
      noResults: state.noResults
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
