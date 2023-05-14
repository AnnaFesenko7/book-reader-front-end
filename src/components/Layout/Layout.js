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

  const toggleModal = () => {
    setModalActive(!modalActive);
  };

  const handleCloseInfo = () => setModalInfoOpen(false);

  return (
    <>
      <Header openModal={toggleModal} isLoggedIn={isLoggedIn} />

      <WrapperBody>
        <Outlet />
      </WrapperBody>
      <Modal active={modalActive} closeModal={toggleModal}>
        <WarningText>
          Якщо Ви вийдете з програми незбережені дані будуть втрачені
        </WarningText>
        <WrapperModalButtons>
          <Button
            textContent="Відміна"
            type="button"
            size="130"
            onClick={toggleModal}
          />
          <Button textContent="Вийти" type="button" size="130" />
        </WrapperModalButtons>
      </Modal>
      {isMobileDevice && (
        <Modal active={modalInfoOpen} closeModal={handleCloseInfo}>
          <Info />
          <Button
            modal
            size="127"
            textContent="OK"
            type="button"
            onClick={handleCloseInfo}
          />
        </Modal>
      )}
    </>
  );
};
