import { useMediaQuery } from 'react-responsive';
import { useLogOutRedirect } from 'hooks/useLogOutRedirect';
import { TrainingDataSelection } from 'components/TrainingDataSelection/TrainingDataSelection';
import { MyGoal } from 'components/MyGoal/MyGoal';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { MobileLinkToSecondPage } from 'components/MobileLinkToSecondPage/MobileLinkToSecondPage';
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

  return (
    <StyledContainer>
      <WrapperBody>
        {isMobileDevice ? (
          <>
            <MobileLinkToSecondPage to="/mobileTraingBookTable " />
            <TrainingDataSelection />
          </>
        ) : (
          <TrainingContainer>
            <TrainingDataSelection />
            <MyGoal />
          </TrainingContainer>
        )}
      </WrapperBody>
    </StyledContainer>
  );
};

export default Training;
