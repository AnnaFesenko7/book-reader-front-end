import { BackDropModal, ModalContent } from './Modal .styled';

export const Modal = ({ active, closeModal, children }) => {
  return (
    <BackDropModal onClick={closeModal} active={active}>
      <ModalContent active={active} onClick={e => e.stopPropagation()}>
        {children}
      </ModalContent>
    </BackDropModal>
  );
};
