import { useMediaQuery } from 'react-responsive';
import { TrainingDataSelection } from 'components/TrainingDataSelection/TrainingDataSelection';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { MobileLinkToSecondPage } from 'components/MobileLinkToSecondPage/MobileLinkToSecondPage';
// import { useGetAllBooksQuery } from 'redux/books/booksApi';
// import { useAddTrainingMutation } from 'redux/books/trainingApi';
// import { useGetAllTrainingsQuery } from 'redux/books/trainingApi';
// import SendPageForm from '../statistics/sendPageForm';
// import Statistics from '../statistics/statistics';

export const Training = () => {
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <StyledContainer>
      {isMobileDevice ? (
        <>
          <MobileLinkToSecondPage to="/mobileLibBookTable" />
          <TrainingDataSelection />
        </>
      ) : (
        <>
          {/* <BookAddForm />
          {isBookInLibrary ? <LibBookTable /> : <Info />} */}
        </>
      )}
    </StyledContainer>
  );
};
