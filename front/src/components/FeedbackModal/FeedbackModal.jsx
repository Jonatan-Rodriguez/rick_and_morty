import React from "react";
import { CheckCircle, XCircle, X } from "lucide-react";
import {
  Overlay,
  ModalContainer,
  Header,
  IconBadge,
  Title,
  Message,
  CloseButton,
  ActionButton
} from "./feedbackModal.styled";

const FeedbackModal = ({ isOpen, onClose, type, title, message }) => {
  if (!isOpen) return null;

  const isSuccess = type === "success";

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>
            <X size={20} />
        </CloseButton>

        <Header>
          <IconBadge $isSuccess={isSuccess}>
            {isSuccess ? <CheckCircle size={32} /> : <XCircle size={32} />}
          </IconBadge>
          
          <Title>{title}</Title>
          <Message>{message}</Message>
        </Header>
        
        <ActionButton $isSuccess={isSuccess} onClick={onClose}>
          {isSuccess ? "Continuar" : "Intentar de nuevo"}
        </ActionButton>
      </ModalContainer>
    </Overlay>
  );
};

export default FeedbackModal;