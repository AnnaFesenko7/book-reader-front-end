import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';

import { useLogOutRedirect } from 'hooks/useLogOutRedirect';
import { TrainingDataSelection } from 'components/TrainingDataSelection/TrainingDataSelection';
import { MyGoal } from 'components/MyGoal/MyGoal';
import { LibBookTable } from 'components/LibBookTable/LibBookTable';
import { Button } from 'components/StyledButton/StyledButton ';
import { MobileLinkToSecondPage } from 'components/MobileLinkToSecondPage/MobileLinkToSecondPage';
import { StyledContainer } from 'components/StyledContainer/StyledContainer.styled';
import { TrainingContainer } from 'components/TrainingContainer/TrainingContainer';
import { WrapperBody } from 'components/WrapperBody/WrapperBody.styled';
import { CenterFlexBox } from 'components/CenterFlexBox/CenterFlexBox';
// import { useGetAllBooksQuery } from 'redux/books/booksApi';
// import { useAddTrainingMutation } from 'redux/books/trainingApi';
// import { useGetAllTrainingsQuery } from 'redux/books/trainingApi';
// import SendPageForm from '../statistics/sendPageForm';
// import Statistics from '../statistics/statistics';

const Training = () => {
  useLogOutRedirect();
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });
  const books = useSelector(state => state.selectedDates.list);

  return (
    <StyledContainer>
      <WrapperBody>
        {isMobileDevice ? (
          <>
            <MobileLinkToSecondPage to="/mobileTraingBookTable " />
            <TrainingDataSelection />
          </>
        ) : (
          <CenterFlexBox>
            <TrainingContainer>
              <TrainingDataSelection />
              <MyGoal />
            </TrainingContainer>
            <LibBookTable data={books} training />
            <Button
              textContent="Почати тренування"
              active
              size={200}
              disabled={true}
              type="button"
            />
            {/* <button disabled={false} type="button">
              Hi
            </button> */}
          </CenterFlexBox>
        )}
      </WrapperBody>
    </StyledContainer>
  );
};

export default Training;
