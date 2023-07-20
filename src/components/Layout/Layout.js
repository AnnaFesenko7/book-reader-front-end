import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Modal } from 'components/Modal/Modal';
import { useModal } from 'hooks/useModal';
import { Header } from 'components/Header/Header';
import { Info } from 'components/Info/Info';
import { isLoggedInSelector } from 'redux/auth/authSelectors';
import { Button } from 'components/StyledButton/StyledButton ';
import { ModalContentWrapper } from './Layout.styled';

export const Layout = () => {
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });
  const isLoggedIn = useSelector(isLoggedInSelector);
  const { isModalOpen, closeModal } = useModal(true);

  return (
    <>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

      {isMobileDevice && isLoggedIn && (
        <Modal active={isModalOpen} closeModal={closeModal}>
          <ModalContentWrapper>
            <Info modal />
            <Button
              active
              size="127"
              textContent="OK"
              type="button"
              onClick={closeModal}
            />
          </ModalContentWrapper>
        </Modal>
      )}
    </>
  );
};
