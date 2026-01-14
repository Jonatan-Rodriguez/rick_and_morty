import React from 'react';
import { ContainerSkeletonLoading } from "./SkeletonLoading.styled";

const SkeletonLoading = () => {
    return(
        <ContainerSkeletonLoading>
            {/* 1. Bloque de Imagen Cuadrada */}
            <div className="skeleton-image skeleton-pulse"></div>
            
            {/* 2. Bloque de Información */}
            <div className="skeleton-info">
                {/* Título (Nombre del personaje) */}
                <div className="skeleton-title skeleton-pulse"></div>
                {/* Subtítulo (Status - Species) */}
                <div className="skeleton-text skeleton-pulse"></div>
            </div>
        </ContainerSkeletonLoading>
    )
}

export default SkeletonLoading;