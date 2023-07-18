import EllipsisText from 'react-ellipsis-text';
// import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FaBookOpen } from 'react-icons/fa';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteBook } from 'redux/selectedDates/selectedDatesSlice';
import { AiOutlineDelete } from 'react-icons/ai';

// import { useScrollbar } from 'hooks/useScrollbar';

import { ShowRatingStars } from 'components/ShowRatingStars/ShowRatingStars';
import { ResumeButton } from 'components/ResumeButton/ResumeButton';

import { UncheckedBox } from 'components/UncheckedBox/UncheckedBox';
import {
  StyledTr,
  StyledTd,
  Wrapper,
  DeleteButton,
  StyledTbody,
} from './BodyBookTable.styled';

export const BodyBookTable = ({
  books,
  training,
  startedTraining,
  isTrainingPage,
  toggleModal,
  setCurrentBookId,
  setCurrentBookResume,
  setCurrentBookRating,
}) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  const dispatch = useDispatch();

  // const hasScroll = books?.length > 6 && training;
  // const WrapperTable = useRef(null);
  // useScrollbar(WrapperTBody, hasScroll);

  return (
    <StyledTbody
    // style={{ height: '50px', overflow: 'scroll' }}

    // hasScroll={hasScroll}
    // training={training}
    >
      {books?.map(
        ({ _id, status, title, author, year, pages, rating, resume }) => {
          return (
            <StyledTr key={_id} isTrainingPage={isTrainingPage}>
              <StyledTd status={status} startedTraining={startedTraining}>
                <Wrapper>
                  {startedTraining ? (
                    <>
                      {status === 'haveRead' ? (
                        <AiOutlineCheckSquare size={'22px'} />
                      ) : (
                        <UncheckedBox />
                      )}
                    </>
                  ) : (
                    <FaBookOpen size={'22px'} />
                  )}

                  <EllipsisText text={title} length={isDesktop ? 70 : 50} />
                </Wrapper>
              </StyledTd>
              <StyledTd>
                <EllipsisText text={author} length={isDesktop ? 32 : 18} />
              </StyledTd>
              <StyledTd>{year}</StyledTd>
              <StyledTd>{pages}</StyledTd>

              {status === 'haveRead' && !startedTraining && (
                <StyledTd>
                  <Wrapper>
                    <ShowRatingStars rating={rating} />
                    <ResumeButton
                      toggleModal={toggleModal}
                      id={_id}
                      rating={rating}
                      resume={resume}
                      setCurrentBookId={setCurrentBookId}
                      setCurrentBookResume={setCurrentBookResume}
                      setCurrentBookRating={setCurrentBookRating}
                    />
                  </Wrapper>
                </StyledTd>
              )}

              {training && (
                <StyledTd>
                  <Wrapper>
                    <DeleteButton onClick={() => dispatch(deleteBook(_id))}>
                      <AiOutlineDelete size={'22px'} />
                    </DeleteButton>
                  </Wrapper>
                </StyledTd>
              )}
            </StyledTr>
          );
        }
      )}

      {training && (
        <StyledTr isTrainingPage={isTrainingPage}>
          <StyledTd status="training">
            <Wrapper>
              <FaBookOpen size={'22px'} />
              ...
            </Wrapper>
          </StyledTd>
          <StyledTd></StyledTd>
          <StyledTd></StyledTd>
          <StyledTd></StyledTd>
          <StyledTd></StyledTd>
        </StyledTr>
      )}
    </StyledTbody>
  );
};
