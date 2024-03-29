import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FaBookOpen } from 'react-icons/fa';
import { AiOutlineCheckSquare, AiOutlineDelete } from 'react-icons/ai';

import { useModal } from 'hooks/useModal';
import { deleteBook } from 'redux/selectedDates/selectedDatesSlice';

import { ResumeButton } from 'components/ResumeButton/ResumeButton';
import { ShowRatingStars } from 'components/ShowRatingStars/ShowRatingStars';
import { Modal } from 'components/Modal/Modal';
import { ResumeModalContent } from 'components/ResumeModalContent/ResumeModalContent';
import { UncheckedBox } from 'components/UncheckedBox/UncheckedBox';
import {
  StyledList,
  StyledListItem,
  StyledBookTitle,
  StyledTable,
  StyledTh,
  StyledTd,
  StyledTr,
  Wrapper,
  BookIcon,
  DeleteButton,
} from './BookTableMobile.styled';

export const BookTableMobile = ({ books, startedTraining, training }) => {
  const { isModalOpen, toggleModal } = useModal();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [currentBookId, setCurrentBookId] = useState(null);
  const [currentBookResume, setCurrentBookResume] = useState('');
  const [currentBookRating, setCurrentBookRating] = useState(null);
  const isTrainingPage = training || startedTraining;
  const resetState = () => {
    setCurrentBookId(null);
    setCurrentBookResume('');
    setCurrentBookRating(null);
  };
  const savedValues = {
    resume: currentBookResume,
    rating: currentBookRating,
  };
  const isEmpty = books.length === 0;
  return (
    <>
      <StyledList>
        {isEmpty && !startedTraining && (
          <StyledListItem key={'empty'} isTrainingPage={isTrainingPage}>
            <BookIcon>
              <FaBookOpen size={'22px'} />
            </BookIcon>
            <StyledTable>
              <StyledBookTitle>{'...'}</StyledBookTitle>
              <tbody>
                <StyledTr>
                  <StyledTh>{t('book_author')}: </StyledTh>
                  <StyledTd>{'...'}</StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTh>{t('book_year')}: </StyledTh>
                  <StyledTd>{'...'}</StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTh>{t('book_pages')}: </StyledTh>
                  <StyledTd>{'...'}</StyledTd>
                </StyledTr>
              </tbody>
            </StyledTable>
          </StyledListItem>
        )}
        {!isEmpty &&
          books.map(
            ({ _id, status, title, author, year, pages, rating, resume }) => {
              return (
                <StyledListItem key={_id} isTrainingPage={isTrainingPage}>
                  <BookIcon
                    status={status}
                    startedTraining={startedTraining}
                    training={training}
                  >
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
                  </BookIcon>
                  {isTrainingPage && !isTrainingPage && (
                    <DeleteButton onClick={() => dispatch(deleteBook(_id))}>
                      <AiOutlineDelete size={'22px'} />
                    </DeleteButton>
                  )}

                  <StyledTable>
                    <StyledBookTitle>{title}</StyledBookTitle>
                    <tbody>
                      <StyledTr>
                        <StyledTh>{t('book_author')}: </StyledTh>
                        <StyledTd>{author}</StyledTd>
                      </StyledTr>
                      <StyledTr>
                        <StyledTh>{t('book_year')}: </StyledTh>
                        <StyledTd>{year}</StyledTd>
                      </StyledTr>
                      <StyledTr>
                        <StyledTh>{t('book_pages')}: </StyledTh>
                        <StyledTd>{pages}</StyledTd>
                      </StyledTr>

                      {status === 'haveRead' && (
                        <StyledTr>
                          <StyledTh>{t('book_rating')}: </StyledTh>
                          <StyledTd>
                            <ShowRatingStars rating={rating} />
                          </StyledTd>
                        </StyledTr>
                      )}
                    </tbody>
                  </StyledTable>
                  {status === 'haveRead' && (
                    <Wrapper>
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
                  )}
                </StyledListItem>
              );
            }
          )}
      </StyledList>
      <Modal active={isModalOpen} closeModal={toggleModal}>
        <ResumeModalContent
          closeModal={toggleModal}
          id={currentBookId}
          savedValues={savedValues}
          resetState={resetState}
        />
      </Modal>
    </>
  );
};
