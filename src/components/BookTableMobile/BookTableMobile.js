import React from 'react';
import PropTypes from 'prop-types';

import { ResumeButton } from 'components/ResumeButton/ResumeButton';
import { FaBookOpen } from 'react-icons/fa';
import {
  StyledList,
  StyledListItem,
  StyledBookTitle,
  Wrapper,
  StyledBookDescription,
} from './BookTableMobile.styled';

export const BookTableMobile = ({ books }) => {
  return (
    <StyledList>
      {books.map(({ _id, status, title, author, year, pages, rating }) => {
        return (
          <StyledListItem key={_id}>
            <FaBookOpen size={'22px'} />
            <Wrapper>
              <StyledBookTitle>{title}</StyledBookTitle>
              <StyledBookDescription>
                <span>Author:</span> {author}
              </StyledBookDescription>
              <StyledBookDescription>
                <span>Year:</span>
                {year}
              </StyledBookDescription>
              <StyledBookDescription>
                <span>Pages:</span>
                {pages}
              </StyledBookDescription>

              {status === 'haveRead' && <ResumeButton />}
            </Wrapper>
          </StyledListItem>
        );
      })}

      {/* {status('reading') && (
          <div className={s.table}>
            <h3 className={s.title}>Reading now</h3>
            <ul className={s.table}>
              {data?.payload.books.map(
                ({ _id, author, pages, title, year, status }) =>
                  status === 'reading' && (
                    <li key={_id} className={s.item}>
                      <p className={s.subtitle}>
                        <svg width={22} height={17} className={s.img}>
                          <use href={`${star}#yellow_book`}></use>
                        </svg>
                        {title}
                      </p>
                      <p className={s.subtitle}>
                        <span className={s.topic}>Author:</span> {author}
                      </p>
                      <p className={s.subtitle}>
                        <span className={s.topic}>Year:</span>
                        {year}
                      </p>
                      <p className={s.subtitle}>
                        <span className={s.topic}>Pages:</span>
                        {pages}
                      </p>
                    </li>
                  )
              )}
            </ul>
          </div>
        )} */}
      {/* {status('toRead') && (
          <div className={s.table}>
            <h3 className={s.title}>Going to read</h3>
            <ul className={s.table}>
              {data?.payload.books.map(
                ({ _id, author, pages, title, year, status }) =>
                  status === 'toRead' && (
                    <li key={_id} className={s.item}>
                      <p className={s.subtitle}>
                        <svg width={22} height={17} className={s.img}>
                          <use href={`${star}#white_book`}></use>
                        </svg>
                        {title}
                      </p>
                      <p className={s.subtitle}>
                        <span className={s.topic}>Author:</span> {author}
                      </p>
                      <p className={s.subtitle}>
                        <span className={s.topic}>Year:</span>
                        {year}
                      </p>
                      <p className={s.subtitle}>
                        <span className={s.topic}>Pages:</span>
                        {pages}
                      </p>
                      <button
                        type="button"
                        className={s.btn}
                        onClick={() => deleteContact(id)}
                        disabled={isDeleting}
                      >
                        Delete Book
                      </button>
                    </li>
                  )
              )}
            </ul>
          </div>
        )} */}
    </StyledList>
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
