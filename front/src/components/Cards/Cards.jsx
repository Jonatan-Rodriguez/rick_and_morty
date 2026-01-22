import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// Actions
import { getFav } from '../../redux/action';
// Components
import Card from '../Card/Card';
import SkeletonLoading from '../SkeletonLoading/SkeletonLoading';
import NoResults from '../NoResults/NoResults';
// Styled
import { ContainerCards } from './cards.styled';

const Cards = ({ characters, loading, noResults }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFav());
    }, [dispatch]);

    // 1. Estado de Carga
    if (loading) {
        return (
            <ContainerCards>
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
                    origin={char.origin?.name || 'Unknown'}
                    image={char.image}
                />
            ))}
        </ContainerCards>
    );
}

export default Cards;