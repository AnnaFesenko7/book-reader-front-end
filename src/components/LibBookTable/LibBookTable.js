import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { BodyBookTable } from 'components/BodyBookTable/BodyBookTable';
import { HeadBookTable } from 'components/HeadBookTable/HeadBookTable';
import { BookTableMobile } from 'components/BookTableMobile/BookTableMobile';
// import { MobileLinkToForm } from 'components/MobileLinkToForm/MobileLinkToForm';

import {
  StyledSection,
  StyledTable,
  StyledCaption,
  WrapperTable,
} from './LibBookTable.styled';
// import {
//   useGetAllBooksQuery,
//   useDeleteBookMutation,
// } from 'redux/books/booksApi';
// import { useTranslation } from 'react-i18next';
// import RatingBookWrapper from 'components/RatingBookWrapper';

// import DeleteModal from './deleteModal';

import { data } from 'pages/Library';

export const LibBookTable = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  // const { data } = useGetAllBooksQuery();
  // const [deleteContact, { isLoading: isDeleting }] = useDeleteBookMutation();
  // const { t, i18n } = useTranslation();

  const books = data?.payload.books;

  const statusObj = books.reduce((obj, book) => {
    const stat = book.status;
    return { ...obj, [stat]: obj[stat] ? [...obj[stat], book] : [book] };
  }, {});

  return (
    <>
      <StyledSection>
        {statusObj.haveRead && (
          <StyledTable>
            {/* <h3 className={s.title}> {t('alreadyRead')}</h3> */}
            <StyledCaption> alreadyRead</StyledCaption>
            {isMobile ? (
              <BookTableMobile books={statusObj.haveRead} />
            ) : (
              <>
                <HeadBookTable status="haveRead" />
                <BodyBookTable books={statusObj.haveRead} />
              </>
            )}
          </StyledTable>
        )}

        {statusObj.reading && (
          <StyledTable>
            <StyledCaption> readingNow</StyledCaption>
            {isMobile ? (
              <BookTableMobile books={statusObj.reading} />
            ) : (
              <>
                <HeadBookTable status="reading" />
                <BodyBookTable books={statusObj.reading} />
              </>
            )}
          </StyledTable>
        )}

        {statusObj.toRead && (
          <WrapperTable>
            {/* <h3 className={s.title}> {t('goingToRead')} </h3> */}

            <StyledTable>
              <StyledCaption>goingToRead</StyledCaption>
              {isMobile ? (
                <>
                  <BookTableMobile books={statusObj.toRead} />
                  {/* <MobileLinkToForm to="/" /> */}
                </>
              ) : (
                <>
                  <HeadBookTable status="toRead" />
                  <BodyBookTable books={statusObj.toRead} />
                </>
              )}
            </StyledTable>
            {/* <DeleteModal
              open={open}
              handleClose={handleClose}
              handleDelete={() => {
                deleteContact(id);
                setOpen(false);
              }}
              isDeleting={isDeleting}
            /> */}
          </WrapperTable>
        )}
      </StyledSection>
    </>
  );
};
// LibBookTable.propTypes = {
//   title: PropTypes.string,
//   author: PropTypes.string,
//   year: PropTypes.number,
//   pages: PropTypes.number,
//   rating: PropTypes.number,
//   status: PropTypes.string,
// };
