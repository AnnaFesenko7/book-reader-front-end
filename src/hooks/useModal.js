import { useState } from 'react';

export const useModal = (isOpen = false) => {
  console.log('🚀 ~ file: useModal.js:4 ~ useModal ~ isOpen:', isOpen);

  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return {
    isModalOpen,
    openModal,
    closeModal,
    toggleModal,
  };
};
