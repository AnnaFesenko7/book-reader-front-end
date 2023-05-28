// import React from 'react';
import { useMediaQuery } from 'react-responsive';
// import LangSwitch from 'components/langSwitch/langSwitch';
import { FaBookOpen, FaHome } from 'react-icons/fa';
import { CustomLink } from 'components/CustomLink/CustomLink';
import { UserName } from './UserName';

// import { authOperations } from '../../redux/auth';
import { useSelector } from 'react-redux';
// import { authSelectors } from '../../redux/auth';
// import { useTranslation } from 'react-i18next';

import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';

import {
  StyledHeader,
  LogoLink,
  StyledNav,
  ExitButton,
  PrivateHeader,
  FlexBox,
} from './Header.styled';

export const Header = ({ openModal }) => {
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });

  const loggedInName = 'Anna';
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // const isLoggedInName = useSelector(authSelectors.getUsername);

  // const { t, i18n } = useTranslation();
  // const changeLanguage = language => {
  //   i18n.changeLanguage(language);
  // };

  // const dispatch = useDispatch();

  return (
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
                <ExitButton onClick={openModal} type="button">
                  {'Вихід'}
                </ExitButton>
              </StyledNav>
            </PrivateHeader>
          )}
        </FlexBox>
      </StyledContainer>
    </StyledHeader>
  );
};
