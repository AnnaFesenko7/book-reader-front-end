import EllipsisText from 'react-ellipsis-text';
import { useMediaQuery } from 'react-responsive';
import { FaBookOpen } from 'react-icons/fa';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteBook } from 'redux/selectedDates/selectedDatesSlice';
import { AiOutlineDelete } from 'react-icons/ai';
import { ShowRatingStars } from 'components/ShowRatingStars/ShowRatingStars';
import { ResumeButton } from 'components/ResumeButton/ResumeButton';

import { UncheckedBox } from 'components/UncheckedBox/UncheckedBox';
import {
  StyledTr,
  StyledTd,
  Wrapper,
  DeleteButton,
} from './BodyBookTable.styled';

export const BodyBookTable = ({
  books,
  toggleModal,
  training,
  startedTraining,
}) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  const dispatch = useDispatch();

  return (
    <>
      <tbody>
        {books?.map(({ _id, status, title, author, year, pages, rating }) => {
          return (
            <StyledTr key={_id}>
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
                    <ResumeButton onClick={toggleModal} />
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
        })}

        {training && (
          <StyledTr>
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
      </tbody>
    </>
  );
};
