import { connect } from 'react-redux';
import { useEffect } from 'react';
// Actions
import { getFav } from '../../redux/action';
// Components
import Card from '../Card/Card';
import SkeletonLoading from '../SkeletonLoading/SkeletonLoading';
import NoResults from '../NoResults/NoResults';
// Styled
import { ContainerCards } from './cards.styled'; // Asegúrate de que coincida el nombre del archivo

const Cards = (props) => {
    const { characters, loading, noResults, getFav } = props;

    useEffect(() => {
        // Traemos favoritos al montar para saber qué corazones pintar
        getFav();
    }, [getFav]);

    // 1. Estado de Carga (Skeletons)
    if (loading) {
        return (
            <ContainerCards>
                {/* Generamos 8 skeletons para que coincida visualmente con la grid */}
                {Array(8).fill(0).map((_, index) => (
                    <SkeletonLoading key={index} />
                ))}
            </ContainerCards>
        );
    }

    // 2. Estado Sin Resultados
    if (noResults) {
        return (
            <ContainerCards style={{ display: 'flex', justifyContent: 'center' }}>
                 <NoResults />
            </ContainerCards>
        );
    }

    // 3. Grid de Personajes
    return (
        <ContainerCards>
            {characters && characters.map((char) => (
                <Card
                    key={char.id}
                    id={char.id}
                    name={char.name}
                    status={char.status}
                    species={char.species}
                    origin={char.origin?.name || 'Unknown'} // Protección opcional por si origin viene null
                    image={char.image}
                />
            ))}
        </ContainerCards>
    );
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        loading: state.loading,
        noResults: state.noResults
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFav: () => dispatch(getFav()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cards);