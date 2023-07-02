import React from 'react';
// import PropTypes from 'prop-types';

import { ResumeButton } from 'components/ResumeButton/ResumeButton';
import { useTranslation } from 'react-i18next';
import { FaBookOpen } from 'react-icons/fa';
import { AiOutlineCheckSquare } from 'react-icons/ai';

import { useModal } from 'hooks/useModal';

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
} from './BookTableMobile.styled';

export const BookTableMobile = ({ books, startedTraining }) => {
  const { isModalOpen, toggleModal } = useModal();
  const { t } = useTranslation();
  return (
    <>
      <StyledList>
        {books.map(({ _id, status, title, author, year, pages, rating }) => {
          return (
            <StyledListItem key={_id}>
              <BookIcon status={status} startedTraining={startedTraining}>
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
                  <ResumeButton onClick={toggleModal} />
                </Wrapper>
              )}
            </StyledListItem>
          );
        })}
      </StyledList>

      <Modal active={isModalOpen} closeModal={toggleModal}>
        <ResumeModalContent closeModal={toggleModal} />
      </Modal>
    </>
  );
};
// BookTableMobile.propTypes = {
//   title: PropTypes.string,
//   author: PropTypes.string,
//   year: PropTypes.number,
//   pages: PropTypes.number,
//   rating: PropTypes.number,
//   status: PropTypes.string,
// };