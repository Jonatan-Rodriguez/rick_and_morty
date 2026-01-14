import React from "react";
import { AlertTriangle, Trash2 } from "lucide-react";
import {
  Overlay,
  ModalContainer,
  Header,
  IconBadge,
  Title,
  Description,
  Footer,
  CancelButton,
  DeleteButton
} from "./deleteModal.styled";

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <Header>
          <IconBadge>
            <AlertTriangle size={24} />
          </IconBadge>
          <div>
            <Title>¿Eliminar personaje?</Title>
            <Description>
              Esta acción no se puede deshacer. El personaje será borrado permanentemente de la base de datos.
            </Description>
          </div>
        </Header>
        
        <Footer>
          <CancelButton onClick={onClose}>
            Cancelar
          </CancelButton>
          <DeleteButton onClick={onConfirm}>
            <Trash2 size={16} />
            Sí, eliminar
          </DeleteButton>
        </Footer>
      </ModalContainer>
    </Overlay>
  );
};

export default DeleteModal;