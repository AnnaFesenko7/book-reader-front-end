import { useMediaQuery } from 'react-responsive';
// import LangSwitch from 'components/langSwitch/langSwitch';
import { FaBookOpen, FaHome } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { CustomLink } from 'components/CustomLink/CustomLink';
import { UserName } from './UserName';
import { Button } from 'components/StyledButton/StyledButton ';
import { Modal } from 'components/Modal/Modal';
import { useModal } from 'hooks/useModal';
import { WarningText, WrapperModalButtons } from './Header.styled';
// import { useTranslation } from 'react-i18next';

import { logOut } from 'redux/authSlice/authSlice';

import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';

import {
  StyledHeader,
  LogoLink,
  StyledNav,
  ExitButton,
  PrivateHeader,
  FlexBox,
  ModalContentWrapper,
} from './Header.styled';

export const Header = () => {
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });
  const dispatch = useDispatch();
  const loggedInName = 'Anna';
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const { isModalOpen, toggleModal } = useModal();

  const handleLogOut = () => {
    toggleModal();
    dispatch(logOut());
  };
  return (
    <>
      <StyledHeader>
        <StyledContainer>
          <FlexBox>
            <LogoLink to="/">BR</LogoLink>

            {/* <LangSwitch onChangeLanguage={changeLanguage} /> */}

            {isLoggedIn && (
              <PrivateHeader>
                {!isMobileDevice && <UserName user={loggedInName} />}

                <StyledNav>
                  <CustomLink icon={FaBookOpen} to="/" />
                  <CustomLink icon={FaHome} to="/training" />
                  {isMobileDevice && <UserName user={loggedInName} />}
                  <ExitButton onClick={toggleModal} type="button">
                    {'Вихід'}
                  </ExitButton>
                </StyledNav>
              </PrivateHeader>
            )}
          </FlexBox>
        </StyledContainer>
      </StyledHeader>

      <Modal active={isModalOpen} closeModal={toggleModal}>
        <ModalContentWrapper>
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
        </ModalContentWrapper>
      </Modal>
    </>
  );
};
