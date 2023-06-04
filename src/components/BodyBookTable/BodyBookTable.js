import EllipsisText from 'react-ellipsis-text';
import { useMediaQuery } from 'react-responsive';
import { FaBookOpen } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteBook } from 'redux/selectedBooks/selectedBooksSlice';
import { AiOutlineDelete } from 'react-icons/ai';
import { ShowRatingStars } from 'components/ShowRatingStars/ShowRatingStars';
import { ResumeButton } from 'components/ResumeButton/ResumeButton';

import {
  StyledTr,
  StyledTd,
  Wrapper,
  DeleteButton,
} from './BodyBookTable.styled';

export const BodyBookTable = ({ books, toggleModal, training }) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  const dispatch = useDispatch();

  return (
    <>
      <tbody>
        {books?.map(({ _id, status, title, author, year, pages, rating }) => {
          return (
            <StyledTr key={_id}>
              <StyledTd status={status}>
                <Wrapper>
                  <FaBookOpen size={'22px'} />
                  <EllipsisText text={title} length={isDesktop ? 70 : 50} />
                </Wrapper>
              </StyledTd>
              <StyledTd>
                <EllipsisText text={author} length={isDesktop ? 32 : 18} />
              </StyledTd>
              <StyledTd>{year}</StyledTd>
              <StyledTd>{pages}</StyledTd>
              {status === 'haveRead' && (
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
            <StyledTd status="toRead">
              <Wrapper>
                <FaBookOpen size={'22px'} />
                ...
              </Wrapper>
            </StyledTd>
          </StyledTr>
        )}
      </tbody>
    </>
  );
};
