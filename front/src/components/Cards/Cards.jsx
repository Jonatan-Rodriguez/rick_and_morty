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
      props.getFav();
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
            <NoResults />
         </ContainerCards>
      );
   }

   return (
      <ContainerCards>
         {/* CAMBIO 1: Ahora recorremos 'props.characters' (la lista filtrada) */}
         {props.characters && props.characters.map(element => {
            return (
               <Card
                  key={element.id}
                  id={element.id}
                  name={element.name}
                  status={element.status}
                  species={element.species}
                  origin={element.origin.name}
                  image={element.image}
               />
            )
         })
         }
      </ContainerCards>
   );
}

const mapStateToProps = (state) => {
   return {
      // CAMBIO 2: Conectamos a 'state.characters' (la que cambia con los filtros)
      // en lugar de 'state.allCharacters' (la copia de seguridad)
      characters: state.characters, 
      loading: state.loading,
      noResults: state.noResults
   };
}

const mapDispatchToProps = (dispatch) => {
   return {
      getFav: () => { dispatch(getFav()) },
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Cards);