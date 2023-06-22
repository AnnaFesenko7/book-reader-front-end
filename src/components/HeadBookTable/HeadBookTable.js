import { StyledThead, StyledTh } from './HeadBookTable.styled';
import { useTranslation } from 'react-i18next';
export const HeadBookTable = ({ status }) => {
  const { t } = useTranslation();
  return (
    <StyledThead>
      <tr>
        <StyledTh name="title" status={status}>
          {t('book_title')}
        </StyledTh>
        <StyledTh name="author" status={status}>
          {t('book_author')}
        </StyledTh>
        <StyledTh name="year" status={status}>
          {t('book_year')}
        </StyledTh>
        <StyledTh name="pages" status={status}>
          {t('book_pages')}
        </StyledTh>
        {status === 'haveRead' && (
          <StyledTh name="rating" status={status}>
            {t('book_rating')}
          </StyledTh>
        )}
      </tr>
    </StyledThead>
  );
};
