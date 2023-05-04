import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import {
  StyledContainer,
  WarningText,
  WrapperModalButtons,
} from './Layout.styled';
import { Header } from 'components/Header/Header';
// import { Info } from 'components/Info/Info';
import { Button } from 'components/StyledButton/StyledButton ';

export const Layout = () => {
  const isLoggedIn = true;
  // const isLoggedInName = 'Anna';

  const [modalActive, setModalActive] = useState(false);
  const closeModal = () => setModalActive(false);
  const openModal = () => setModalActive(true);

  return (
    <StyledContainer>
      <Header openModal={openModal} isLoggedIn={isLoggedIn} />
      <Outlet />
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

      {/* <Modal open={openInfo} onClose={handleCloseInfo}>
        <Box sx={boxStyle}>
          <Info />
          <Button textContent="OK" type="button" onClick={handleCloseInfo} />
        </Box>
      </Modal> */}
    </StyledContainer>
  );
};
