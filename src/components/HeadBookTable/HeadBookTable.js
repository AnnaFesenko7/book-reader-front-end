import { StyledThead, StyledTh } from './HeadBookTable.styled';

export const HeadBookTable = ({ status }) => {
  return (
    <StyledThead>
      <tr>
        <StyledTh name="title" status={status}>
          {/* {t('book_title')} */}
          book_title
        </StyledTh>
        <StyledTh name="author" status={status}>
          {/* {t('book_author')} */}
          book_author
        </StyledTh>
        <StyledTh name="year" status={status}>
          {/* {t('book_year')} */}
          book_year
        </StyledTh>
        <StyledTh name="pages" status={status}>
          {/* {t('book_pages')} */}
          book_pages
        </StyledTh>
        {status === 'haveRead' && (
          <StyledTh name="rating" status={status}>
            {/* {t('book_rating')} */}
            book_rating
          </StyledTh>
        )}
      </tr>
    </StyledThead>
  );
};
