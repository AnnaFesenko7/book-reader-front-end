import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { booksSelectors, booksOperations } from 'redux/books';
import { userSelectors } from 'redux/auth';
import { useLogOutRedirect } from 'hooks/useLogOutRedirect';

import { Info } from 'components/Info/Info';
import { BookAddForm } from 'components/BookAddForm/BookAddForm';
import { Button } from 'components/StyledButton/StyledButton ';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { MobileLinkToSecondPage } from 'components/MobileLinkToSecondPage/MobileLinkToSecondPage';
import { LibBookTable } from 'components/LibBookTable/LibBookTable';
import { WrapperBody } from 'components/WrapperBody/WrapperBody.styled';
import { CenterFlexBox } from 'components/CenterFlexBox/CenterFlexBox';

const Library = () => {
  useLogOutRedirect();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [updateUi, setUpdateUi] = useState(false);

  useEffect(() => {
    dispatch(booksOperations.getBooks());
  }, [dispatch, updateUi]);

  const books = useSelector(booksSelectors.getBooks);
  const isTrainingStarted = useSelector(userSelectors.isTrainingStarted);

  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });

  const isBookInLibrary = books.length > 0;

  const onMyTrainingBtnClick = () => {
    navigate('/training', { replace: true });
  };

  return (
    <section>
      <StyledContainer>
        <WrapperBody>
          {isMobileDevice ? (
            <>
              <MobileLinkToSecondPage to="/mobileLibBookTable" />
              <BookAddForm />
            </>
          ) : (
            <>
              <BookAddForm updateUi={setUpdateUi} />
              {isBookInLibrary ? (
                <CenterFlexBox>
                  <LibBookTable data={books} />
                  <Button
                    active
                    size={200}
                    textContent={t('myTraining')}
                    onClick={onMyTrainingBtnClick}
                  />
                </CenterFlexBox>
              ) : (
                <Info />
              )}
            </>
          )}
        </WrapperBody>
      </StyledContainer>
    </section>
  );
};
export default Library;
