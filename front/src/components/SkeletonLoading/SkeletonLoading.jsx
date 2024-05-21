import { ContainerSkeletonLoading } from "./SkeletonLoading.styled";
const SkeletonLoading = () => {
    return(
        <ContainerSkeletonLoading>
            <div className="card">
                <div className="card__skeleton card__title"></div>
                <div className="card__skeleton card__description"></div>
            </div>
        </ContainerSkeletonLoading>
    )
}

export default SkeletonLoading;