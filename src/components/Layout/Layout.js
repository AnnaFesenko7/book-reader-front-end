import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Modal } from 'components/Modal/Modal';
import { useModal } from 'hooks/useModal';
import { Header } from 'components/Header/Header';
import { Info } from 'components/Info/Info';
import { Button } from 'components/StyledButton/StyledButton ';

export const Layout = () => {
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const { isModalOpen, closeModal } = useModal(true);

  return (
    <>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

      {isMobileDevice && isLoggedIn && (
        <Modal active={isModalOpen} closeModal={closeModal}>
          <Info />
          <Button
            modal
            size="127"
            textContent="OK"
            type="button"
            onClick={closeModal}
          />
        </Modal>
      )}
    </>
  );
};
