import { useSelector } from 'react-redux';
import { booksSelectors } from 'redux/books';

import { useLogOutRedirect } from 'hooks/useLogOutRedirect';
import { LibBookTable } from 'components/LibBookTable/LibBookTable';
import { MobileLinkToForm } from 'components/MobileLinkToForm/MobileLinkToForm';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { useMediaQuery } from 'react-responsive';

const MobileTrainBookTable = () => {
  useLogOutRedirect();
  const books = useSelector(booksSelectors.getBooksSelector);
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <StyledContainer>
      <LibBookTable data={books} />
      {isMobileDevice && (
        <>
          <MobileLinkToForm to="/training" />
        </>
      )}
    </StyledContainer>
  );
};
export default MobileTrainBookTable;
