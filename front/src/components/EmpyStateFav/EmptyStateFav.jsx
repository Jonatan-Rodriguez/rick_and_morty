import React from "react";
import { Link } from "react-router-dom";
// Iconos
import { Heart, Search } from "lucide-react";
// Estilos
import { 
  EmptyContainer, 
  GlassCard, 
  PortalIllustration, 
  EmptyTitle, 
  EmptyDescription, 
  GoBackButton 
} from "./emptyStateFav.styled";

const EmptyStateFav = () => {
    return (
        <EmptyContainer>
            <GlassCard>
                <PortalIllustration>
                    <div className="portal-ring" />
                    <div className="inner-circle">
                        <Heart size={48} color="#64748b" />
                    </div>
                </PortalIllustration>
                
                <EmptyTitle>Aún no hay favoritos</EmptyTitle>
                
                <EmptyDescription>
                    Parece que no has agregado ningún personaje a tus favoritos. 
                    ¡Comienza a explorar el multiverso y guarda los que más te gusten!
                </EmptyDescription>
                
                <Link to="/home">
                    <GoBackButton>
                        <Search size={18} />
                        Explorar Personajes
                    </GoBackButton>
                </Link>
            </GlassCard>
        </EmptyContainer>
    );
};

export default EmptyStateFav;