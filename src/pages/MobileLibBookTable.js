import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { booksSelectors, booksThunk } from 'redux/books';

import { useLogOutRedirect } from 'hooks/useLogOutRedirect';
import { LibBookTable } from 'components/LibBookTable/LibBookTable';
import { MobileLinkToForm } from 'components/MobileLinkToForm/MobileLinkToForm';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { Button } from 'components/StyledButton/StyledButton ';
import { CenterFlexBox } from 'components/CenterFlexBox/CenterFlexBox';

const MobileLibBookTable = () => {
  useLogOutRedirect();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(booksThunk.getBooksThunk());
  }, [dispatch]);

  const books = useSelector(booksSelectors.getBooks);

  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });

  const onMyTrainingBtnClick = () => {
    navigate('/training', { replace: true });
  };
  return (
    <StyledContainer>
      <CenterFlexBox style={{ paddingBottom: '100px' }}>
        <LibBookTable data={books} />
        {isMobileDevice && <MobileLinkToForm to="/" />}
        <Button
          active
          size={171}
          textContent={t('myTraining')}
          onClick={onMyTrainingBtnClick}
        />
      </CenterFlexBox>
    </StyledContainer>
  );
};
export default MobileLibBookTable;
