import { Outlet } from 'react-router-dom';
import React from 'react';

import { StyledContainer } from './Layout.styled';
import { Header } from 'components/Header/Header';
// import { Info } from 'components/Info/Info';
// import { Button } from 'components/StyledButton/StyledButton ';

export const Layout = () => {
  const isLoggedIn = true;
  // const isLoggedInName = 'Anna';

  // const [openInfo, setOpenInfo] = useState(false);
  // const handleCloseInfo = () => setOpenInfo(false);

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     setOpenInfo(true);
  //   }
  // }, [isLoggedIn]);
  return (
    <StyledContainer>
      <Header isLoggedIn={isLoggedIn} />
      <Outlet />

      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={s.modal}>
          <p className={s.modal_text}>
            Якщо Ви вийдете з програми незбережені дані будуть втрачені
          </p>
          <div className={s.btn_modal}>
            <button type="button" onClick={handleClose}>
              Відміна
            </button>
            <button type="button" onClick={handleExit}>
              Вийти
            </button>
          </div>
        </Box>
      </Modal>

      <Modal open={openInfo} onClose={handleCloseInfo}>
        <Box sx={boxStyle}>
          <Info />
          <Button textContent="OK" type="button" onClick={handleCloseInfo} />
        </Box>
      </Modal> */}
    </StyledContainer>
  );
};
