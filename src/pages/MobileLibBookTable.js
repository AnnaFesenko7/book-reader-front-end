import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { booksSelectors, booksThunk } from 'redux/books';
import { separateBooksByStatus } from 'helpers/separateBooksByStatus';

import { useLogOutRedirect } from 'hooks/useLogOutRedirect';

import { StyledCaption } from 'components/StyledCaption/StyledCaption';
import { BookTableMobile } from 'components/BookTableMobile/BookTableMobile';
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

  const statusObj = separateBooksByStatus(books);
  return (
    <StyledContainer>
      <CenterFlexBox style={{ paddingBottom: '100px' }}>
        {statusObj.haveRead && (
          <>
            <StyledCaption>{t('alreadyRead')}</StyledCaption>
            <BookTableMobile books={statusObj.haveRead} />
          </>
        )}
        {statusObj.reading && (
          <>
            <StyledCaption> {t('readingNow')} </StyledCaption>
            <BookTableMobile books={statusObj.reading} />
          </>
        )}
        {statusObj.toRead && (
          <>
            <StyledCaption> {t('goingToRead')} </StyledCaption>
            <BookTableMobile books={statusObj.toRead} />
          </>
        )}
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
