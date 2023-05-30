import React from 'react';
// import PropTypes from 'prop-types';

import { ResumeButton } from 'components/ResumeButton/ResumeButton';
import { FaBookOpen } from 'react-icons/fa';
import { ShowRatingStars } from 'components/ShowRatingStars/ShowRatingStars';
import { Modal } from 'components/Modal/Modal';
import { useModal } from 'hooks/useModal';
import { ResumeModalContent } from 'components/ResumeModalContent/ResumeModalContent';
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

export const BookTableMobile = ({ books }) => {
  const { isModalOpen, toggleModal } = useModal();
  return (
    <>
      <StyledList>
        {books.map(({ _id, status, title, author, year, pages, rating }) => {
          return (
            <StyledListItem key={_id}>
              <BookIcon status={status}>
                <FaBookOpen size={'22px'} />
              </BookIcon>
              <StyledTable>
                <StyledBookTitle>{title}</StyledBookTitle>
                <tbody>
                  <StyledTr>
                    <StyledTh>Author: </StyledTh>
                    <StyledTd>{author}</StyledTd>
                  </StyledTr>
                  <StyledTr>
                    <StyledTh>Year: </StyledTh>
                    <StyledTd>{year}</StyledTd>
                  </StyledTr>
                  <StyledTr>
                    <StyledTh>Pages: </StyledTh>
                    <StyledTd>{pages}</StyledTd>
                  </StyledTr>

                  {status === 'haveRead' && (
                    <StyledTr>
                      <StyledTh>Ratings: </StyledTh>
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