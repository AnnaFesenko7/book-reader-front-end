import React from 'react';
import PropTypes from 'prop-types';

import { ResumeButton } from 'components/ResumeButton/ResumeButton';
import { FaBookOpen } from 'react-icons/fa';
import { ShowRatingStars } from 'components/ShowRatingStars/ShowRatingStars';
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
              </StyledTable>
              {status === 'haveRead' && (
                <Wrapper>
                  <ResumeButton />
                </Wrapper>
              )}
            </StyledListItem>
          );
        })}
      </StyledList>
    </>
  );
};
BookTableMobile.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  year: PropTypes.number,
  pages: PropTypes.number,
  rating: PropTypes.number,
  status: PropTypes.string,
};
