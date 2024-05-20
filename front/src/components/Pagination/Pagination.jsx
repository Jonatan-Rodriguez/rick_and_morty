//styled
import { ContainerPagination } from "./pagination.styled";
//hooks
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
//actions
import { getChar } from "../../redux/action";

const Pagination = () => {

    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    const pagesNavigation = useSelector(state => state.pagesNavigation);
    const nameSearch = useSelector(state => state.nameSearch);

    const prevHandler = () => {
        if(count > 1){
            let countCopy = count -1;
            setCount(countCopy);
            dispatch(getChar(nameSearch,countCopy));
        }
    }

    const nextHandler = () => {
        if(count < pagesNavigation){
            let countCopy = count +1;
            setCount(countCopy);
            dispatch(getChar(nameSearch,countCopy));
        }
    }

    return(
        <ContainerPagination>
            <div className="pagination-btn">
                <button className="btn-nav" onClick={() => {prevHandler()}}>&lt; Anterior</button>
                <div className="pagination-pag">
                    <span className="pag">{count}</span><span>de {pagesNavigation}</span>
                </div>
                <button className="btn-nav" onClick={() => {nextHandler()}}>Siguiente &gt;</button>
            </div>
        </ContainerPagination>
    )
}

export default Pagination;