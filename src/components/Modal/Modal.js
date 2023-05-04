import { BackDropModal, ModalContent } from './Modal .styled';

export const Modal = ({ active, closeModal, children }) => {
  return (
    <BackDropModal onClick={closeModal} active={active}>
      <ModalContent onClick={e => e.stopPropagation()}>{children}</ModalContent>
    </BackDropModal>
  );
};
