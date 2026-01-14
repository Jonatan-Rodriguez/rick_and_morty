import React from 'react';
// Icono
import { SearchX } from "lucide-react";
// Estilos
import { ContainerNoResults } from "./noResults.styled";

const NoResults = () => {
    return(
        <ContainerNoResults>
            <div className="icon-wrapper">
                <SearchX />
            </div>
            
            <h2>Sin resultados</h2>
            <p>
                Parece que este personaje está en otra dimensión. 
                Intenta ajustar tu búsqueda o los filtros.
            </p>
        </ContainerNoResults>
    )
}

export default NoResults;