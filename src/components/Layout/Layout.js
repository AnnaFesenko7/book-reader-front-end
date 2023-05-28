import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useState, Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Modal } from 'components/Modal/Modal';
import { WarningText, WrapperModalButtons } from './Layout.styled';
import { logOut } from 'redux/authSlice/authSlice';
import { Header } from 'components/Header/Header';
import { Info } from 'components/Info/Info';
import { Button } from 'components/StyledButton/StyledButton ';

export const Layout = () => {
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });

  const dispatch = useDispatch();

  const [modalInfoOpen, setModalInfoOpen] = useState(true);
  const [modalActive, setModalActive] = useState(false);

  const toggleModal = () => {
    setModalActive(!modalActive);
  };

  const handleCloseInfo = () => setModalInfoOpen(false);
  const handleLogOut = () => {
    toggleModal();
    dispatch(logOut());
  };

  return (
    <>
      <Header openModal={toggleModal} />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

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
          <Button
            textContent="Вийти"
            type="button"
            size="130"
            onClick={handleLogOut}
          />
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
