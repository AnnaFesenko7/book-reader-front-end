import React from 'react';
import s from './bookTable.module.css';

import { StyledSection } from './StyledLibBookTable';
import { BodyBookTable } from 'components/BodyBookTable/BodyBookTable';
// import {
//   useGetAllBooksQuery,
//   useDeleteBookMutation,
// } from 'redux/books/booksApi';
// import { useTranslation } from 'react-i18next';
// import RatingBookWrapper from 'components/RatingBookWrapper';

// import DeleteModal from './deleteModal';

import { data } from 'pages/Library';

export const LibBookTable = () => {
  // const { data } = useGetAllBooksQuery();
  // const [deleteContact, { isLoading: isDeleting }] = useDeleteBookMutation();
  // const { t, i18n } = useTranslation();

  const books = data?.payload.books;
  // const status = stat => {
  //   return books.some(book => book.status === stat);
  // };
  const statusObj = books.reduce((obj, book) => {
    const stat = book.status;
    return { ...obj, [stat]: obj[stat] ? [...obj[stat], book] : [book] };
  }, {});

  // const [id, serId] = useState(null);
  // const [open, setOpen] = useState(false);
  // const handleOpen = id => {
  //   serId(id);
  //   setOpen(true);
  // };
  // const handleClose = () => setOpen(false);

  return (
    <>
      <StyledSection>
        {statusObj.haveRead && (
          <div className={s.table}>
            {/* <h3 className={s.title}> {t('alreadyRead')}</h3> */}
            <h3 className={s.title}> alreadyRead</h3>
            <table className={s.subTable}>
              <thead className={s.head}>
                <tr>
                  <th className={s.topic} width="30%">
                    {/* {t('book_title')} */}
                    book_title
                  </th>
                  <th className={s.topic} width="25%">
                    {/* {t('book_author')} */}
                    book_author
                  </th>
                  <th className={s.topic} width="10%">
                    {/* {t('book_year')} */}
                    book_year
                  </th>
                  <th className={s.topic} width="10%">
                    {/* {t('book_pages')} */}
                    book_pages
                  </th>
                  <th className={s.topic} width="25%">
                    {/* {t('book_rating')} */}
                    book_rating
                  </th>
                </tr>
              </thead>
              <BodyBookTable books={statusObj.haveRead} />
            </table>
          </div>
        )}

        {statusObj.reading && (
          <div className={s.table}>
            {/* <h3 className={s.title}> {t('readingNow')}</h3> */}
            <h3 className={s.title}> readingNow</h3>
            <table className={s.subTable}>
              <thead className={s.head}>
                <tr>
                  <th className={s.topic} width="55%">
                    {/* {t('book_title')} */}
                    book_title
                  </th>
                  <th className={s.topic} width="25%">
                    {/* {t('book_author')} */}
                    book_author
                  </th>
                  <th className={s.topic} width="10%">
                    {/* {t('book_year')} */}
                    book_year
                  </th>
                  <th className={s.topic} width="10%">
                    {/* {t('book_pages')} */}
                    book_pages
                  </th>
                </tr>
              </thead>
              <BodyBookTable books={statusObj.reading} />
            </table>
          </div>
        )}
        {statusObj.toRead && (
          <div className={s.table}>
            {/* <h3 className={s.title}> {t('goingToRead')} </h3> */}
            <h3 className={s.title}> goingToRead </h3>
            <table className={s.subTable}>
              <thead className={s.head}>
                <tr>
                  <th className={s.topic} width="55%">
                    {/* {t('book_title')} */}
                    book_title
                  </th>
                  <th className={s.topic} width="25%">
                    {/* {t('book_author')} */}
                    book_author
                  </th>
                  <th className={s.topic} width="10%">
                    {/* {t('book_year')} */}
                    book_year
                  </th>
                  <th className={s.topic} width="5%">
                    {/* {t('book_pages')} */}
                    book_pages
                  </th>
                  <th className={s.topic} width="5%"></th>
                </tr>
              </thead>
              <BodyBookTable books={statusObj.toRead} />
            </table>
            {/* <DeleteModal
              open={open}
              handleClose={handleClose}
              handleDelete={() => {
                deleteContact(id);
                setOpen(false);
              }}
              isDeleting={isDeleting}
            /> */}
          </div>
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
