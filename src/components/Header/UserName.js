import { StyledNav } from './Header.styled';
import { useMediaQuery } from 'react-responsive';
import { CustomLink } from 'components/CustomLink/CustomLink';

export const UserName = ({ user }) => {
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });

  const userLogo = user ? user[0] : 'U';
  return (
    <StyledNav>
      {isMobileDevice ? (
        <>
          <CustomLink to="/">{userLogo}</CustomLink>
        </>
      ) : (
        <>
          <CustomLink to="/">{userLogo}</CustomLink>
          <p>{user}</p>
        </>
      )}
    </StyledNav>
  );
};
