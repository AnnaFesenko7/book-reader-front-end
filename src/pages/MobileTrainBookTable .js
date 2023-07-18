import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import { useLogOutRedirect } from 'hooks/useLogOutRedirect';
import { selectedDatesSelectors } from 'redux/selectedDates';
import { trainingSelectors } from 'redux/training';
import { userSelectors } from 'redux/auth';

import { MobileLinkToForm } from 'components/MobileLinkToForm/MobileLinkToForm';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { CenterFlexBox } from 'components/CenterFlexBox/CenterFlexBox';
import { BookTableMobile } from 'components/BookTableMobile/BookTableMobile';

const MobileTrainBookTable = () => {
  useLogOutRedirect();
  const selectedBooks = useSelector(selectedDatesSelectors.booksList);
  const books = useSelector(trainingSelectors.booksList);
  const isTrainingStarted = useSelector(userSelectors.isTrainingStarted);
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <StyledContainer>
      <CenterFlexBox style={{ paddingBottom: '100px' }}>
        <BookTableMobile books={isTrainingStarted ? books : selectedBooks} />
        {/* <LibBookTable data={isTrainingStarted ? books : selectedBooks} /> */}
        {isMobileDevice && (
          <>
            <MobileLinkToForm to="/training" />
          </>
        )}
      </CenterFlexBox>
    </StyledContainer>
  );
};
export default MobileTrainBookTable;
