import { ContainerFilterFav } from "./filterFav.styled";
import { useDispatch} from 'react-redux';
import { filterCards, orderCards } from "../../redux/action";
import down from '../../assets/img/arrow.svg';

const FilterFav = () => {

    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    }

    return(
        <ContainerFilterFav>
            <p>Genero: </p>
            <div className='selectContainer'>
                <select className='selectBox' onChange={handleFilter}>
                    <option value="all">Todos</option>
                    <option value="Male">Hombre</option>
                    <option value="Female">Mujer</option>
                    <option value="Genderless">Sin genero</option>
                    <option value="unknown">Desconocido</option>
                </select>
                <div className='iconContainer'>
                    <img src={down} alt="filtros" />
                </div>
            </div>
            <p>Orden alfabético: </p>
            <div className='selectContainer'>
                <select className='selectBox' onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option> 
                </select>
                <div className='iconContainer'>
                    <img src={down} alt="filtros" />
                </div>
            </div>
        </ContainerFilterFav>
    )
}

export default FilterFav;