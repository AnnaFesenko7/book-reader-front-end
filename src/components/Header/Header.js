import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { LangSwitcher } from 'components/LangSwitcher/LangSwitcher';
import { FaBookOpen, FaHome } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { CustomLink } from 'components/CustomLink/CustomLink';
import { UserName } from './UserName';
import { Button } from 'components/StyledButton/StyledButton ';
import { Modal } from 'components/Modal/Modal';
import { useModal } from 'hooks/useModal';
import { WarningText, WrapperModalButtons } from './Header.styled';
import { useTranslation } from 'react-i18next';
import { changeLangThunk } from 'redux/auth/userThunk';
import { changeLanguageAction } from 'redux/auth/authSlice';

import { logoutThunk } from 'redux/auth/authThunk';
import { deleteToken } from 'services/apiService/axiosInstance';
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

  const { token, userName, currentLang } = useSelector(state => state.auth);

  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(currentLang);
  }, [currentLang, i18n]);

  const { isModalOpen, toggleModal } = useModal();

  const handleLogOut = () => {
    toggleModal();
    localStorage.clear();
    dispatch(logoutThunk());
    dispatch(changeLangThunk(currentLang));
    deleteToken();
  };

  const changeLanguageState = language => {
    dispatch(changeLanguageAction(language));
  };
  return (
    <>
      <StyledHeader>
        <StyledContainer>
          <FlexBox>
            <LogoLink to="/">BR</LogoLink>

            <LangSwitcher
              onChangeLanguage={changeLanguageState}
              currentLang={currentLang}
            />

            {token && (
              <PrivateHeader>
                {!isMobileDevice && <UserName user={userName} />}

                <StyledNav>
                  <CustomLink icon={FaBookOpen} to="/" />
                  <CustomLink icon={FaHome} to="/training" />
                  {isMobileDevice && <UserName user={userName} />}
                  <ExitButton onClick={toggleModal} type="button">
                    {t('logout')}
                  </ExitButton>
                </StyledNav>
              </PrivateHeader>
            )}
          </FlexBox>
        </StyledContainer>
      </StyledHeader>

      <Modal active={isModalOpen} closeModal={toggleModal}>
        <ModalContentWrapper>
          <WarningText>{t('modal1_notification')}</WarningText>
          <WrapperModalButtons>
            <Button
              textContent={t('btnCancel')}
              type="button"
              size="130"
              onClick={toggleModal}
            />
            <Button
              textContent={t('btnLeave')}
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
