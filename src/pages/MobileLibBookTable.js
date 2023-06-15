import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { booksSelectors, booksOperations } from 'redux/books';

import { useLogOutRedirect } from 'hooks/useLogOutRedirect';
import { LibBookTable } from 'components/LibBookTable/LibBookTable';
import { MobileLinkToForm } from 'components/MobileLinkToForm/MobileLinkToForm';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { useMediaQuery } from 'react-responsive';

const MobileLibBookTable = () => {
  useLogOutRedirect();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(booksOperations.getBooks());
  }, [dispatch]);

  const books = useSelector(booksSelectors.getBooks);

  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <StyledContainer>
      <LibBookTable data={books} />
      {isMobileDevice && <MobileLinkToForm to="/" />}
    </StyledContainer>
  );
};
export default MobileLibBookTable;
