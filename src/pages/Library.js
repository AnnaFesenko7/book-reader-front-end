import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { booksSelectors, booksOperations } from 'redux/books';
import { useLogOutRedirect } from 'hooks/useLogOutRedirect';
import { Info } from 'components/Info/Info';
import { BookAddForm } from 'components/BookAddForm/BookAddForm';
import { useMediaQuery } from 'react-responsive';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { MobileLinkToSecondPage } from 'components/MobileLinkToSecondPage/MobileLinkToSecondPage';
import { LibBookTable } from 'components/LibBookTable/LibBookTable';
import { WrapperBody } from 'components/WrapperBody/WrapperBody.styled';

const Library = () => {
  useLogOutRedirect();

  const [updateUi, setUpdateUi] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(booksOperations.getBooks());
  }, [dispatch, updateUi]);

  const books = useSelector(booksSelectors.getBooks);

  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });

  const isBookInLibrary = books.length > 0;
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
              {isBookInLibrary ? <LibBookTable data={books} /> : <Info />}
            </>
          )}
        </WrapperBody>
      </StyledContainer>
    </section>
  );
};
export default Library;
