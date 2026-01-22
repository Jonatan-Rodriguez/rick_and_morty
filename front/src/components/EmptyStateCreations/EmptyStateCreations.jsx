import React from "react";
import { Link } from "react-router-dom";
// íconos
import { FlaskConical, PlusCircle } from "lucide-react";
// estilos
import { 
  EmptyContainer, 
  GlassCard, 
  IconWrapper, 
  EmptyTitle, 
  EmptyDescription, 
  CreateButton 
} from "./emptyStateCreations.styled";

const EmptyStateCreations = () => {
    return (
        <EmptyContainer>
            <GlassCard>
                <IconWrapper>
                    <div className="glow-effect" />
                    <FlaskConical size={48} color="#60a5fa" />
                </IconWrapper>
                
                <EmptyTitle>Laboratorio Vacío</EmptyTitle>
                
                <EmptyDescription>
                    No has creado ningún personaje experimental todavía.
                    ¡Usa tu imaginación y añade nuevos especímenes al multiverso!
                </EmptyDescription>
                
                <Link to="/create">
                    <CreateButton>
                        <PlusCircle size={18} />
                        Crear Personaje
                    </CreateButton>
                </Link>
            </GlassCard>
        </EmptyContainer>
    );
};

export default EmptyStateCreations;