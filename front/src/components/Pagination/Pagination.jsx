import { ContainerPagination } from "./pagination.styled";
import { useSelector, useDispatch } from 'react-redux';
import { getChar } from "../../redux/action";

const Pagination = () => {

    const dispatch = useDispatch();
    const pagesNavigation = useSelector(state => state.pagesNavigation);

    console.log(pagesNavigation)
    const prevHandler = () => {
        dispatch(getChar('','1'));
    }

    const nextHandler = () => {
        dispatch(getChar('','2'));
    }

    return(
        <ContainerPagination>
            <div className="pagination-btn">
                <button className="btn-nav" onClick={prevHandler}>&lt; Anterior</button>
                <div className="pagination-pag">
                    <span className="pag">1</span><span>de {pagesNavigation}</span>
                </div>
                <button className="btn-nav" onClick={nextHandler}>Siguiente &gt;</button>
            </div>
        </ContainerPagination>
    )
}

export default Pagination;