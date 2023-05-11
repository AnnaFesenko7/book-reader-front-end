import EllipsisText from 'react-ellipsis-text';
import { useMediaQuery } from 'react-responsive';
import { FaBookOpen } from 'react-icons/fa';
import { ShowRatingStars } from 'components/ShowRatingStars/ShowRatingStars';
import { StyledTr, StyledTd, TitleWrapper } from './BodyBookTable.styled';

export const BodyBookTable = ({ books }) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <tbody>
      {books.map(({ _id, status, title, author, year, pages, rating }) => {
        return (
          <StyledTr key={_id}>
            <StyledTd status={status}>
              <TitleWrapper>
                <FaBookOpen size={22} />
                <EllipsisText text={title} length={isDesktop ? 50 : 25} />
              </TitleWrapper>
            </StyledTd>
            <StyledTd>
              <EllipsisText text={author} length={isDesktop ? 32 : 18} />
            </StyledTd>
            <StyledTd>{year}</StyledTd>
            <StyledTd>{pages}</StyledTd>
            {status === 'haveRead' && (
              <StyledTd>
                <ShowRatingStars rating={rating} />
              </StyledTd>
            )}
          </StyledTr>
        );
      })}
    </tbody>
  );
};
