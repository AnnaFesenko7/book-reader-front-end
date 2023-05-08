import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Modal } from 'components/Modal/Modal';
import { WarningText, WrapperModalButtons, WrapperBody } from './Layout.styled';

import { Header } from 'components/Header/Header';
import { Info } from 'components/Info/Info';
import { Button } from 'components/StyledButton/StyledButton ';

export const Layout = () => {
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });
  const isLoggedIn = true;
  // const isLoggedInName = 'Anna';
  const [modalInfoOpen, setModalInfoOpen] = useState(true);
  const [modalActive, setModalActive] = useState(false);
  const closeModal = () => setModalActive(false);
  const openModal = () => setModalActive(true);
  const handleCloseInfo = () => setModalInfoOpen(false);
  return (
    <>
      <Header openModal={openModal} isLoggedIn={isLoggedIn} />
     
      <WrapperBody>
        <Outlet />
      </WrapperBody>
      <Modal active={modalActive} closeModal={closeModal}>
        <WarningText>
          Якщо Ви вийдете з програми незбережені дані будуть втрачені
        </WarningText>
        <WrapperModalButtons>
          <Button
            textContent="Відміна"
            type="button"
            size="130"
            onClick={closeModal}
          />
          <Button textContent="Вийти" type="button" size="130" />
        </WrapperModalButtons>
      </Modal>
      {isMobileDevice && (
        <Modal active={modalInfoOpen} closeModal={handleCloseInfo}>
          <Info />
          <Button
            modal
            textContent="OK"
            type="button"
            onClick={handleCloseInfo}
          />
        </Modal>
      )}
     
    </>
  );
};
