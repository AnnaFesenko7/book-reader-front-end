import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';

import { useLogOutRedirect } from 'hooks/useLogOutRedirect';
import { TrainingDataSelection } from 'components/TrainingDataSelection/TrainingDataSelection';
import { MyGoal } from 'components/MyGoal/MyGoal';
import { LibBookTable } from 'components/LibBookTable/LibBookTable';

import { MobileLinkToSecondPage } from 'components/MobileLinkToSecondPage/MobileLinkToSecondPage';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { TrainingContainer } from 'components/TrainingContainer/TrainingContainer';
import { WrapperBody } from 'components/WrapperBody/WrapperBody.styled';
// import { useGetAllBooksQuery } from 'redux/books/booksApi';
// import { useAddTrainingMutation } from 'redux/books/trainingApi';
// import { useGetAllTrainingsQuery } from 'redux/books/trainingApi';
// import SendPageForm from '../statistics/sendPageForm';
// import Statistics from '../statistics/statistics';

const Training = () => {
  useLogOutRedirect();
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });
  const books = useSelector(state => state.selectedBooks.list);

  return (
    <StyledContainer>
      <WrapperBody>
        {isMobileDevice ? (
          <>
            <MobileLinkToSecondPage to="/mobileTraingBookTable " />
            <TrainingDataSelection />
          </>
        ) : (
          <>
            <TrainingContainer>
              <TrainingDataSelection />
              <MyGoal />
            </TrainingContainer>
            <LibBookTable data={books} training />
          </>
        )}
      </WrapperBody>
    </StyledContainer>
  );
};

export default Training;
