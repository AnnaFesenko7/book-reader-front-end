import EllipsisText from 'react-ellipsis-text';
import { useMediaQuery } from 'react-responsive';
import { FaBookOpen } from 'react-icons/fa';
import { ShowRatingStars } from 'components/ShowRatingStars/ShowRatingStars';
import { StyledTbody, StyledTr, StyledTd } from './BodyBookTable.styled';

export const BodyBookTable = ({ books }) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <StyledTbody>
      {books.map(({ _id, status, title, author, year, pages, rating }) => {
        return (
          <StyledTr key={_id}>
            <StyledTd status={status}>
              <FaBookOpen />

              <EllipsisText text={title} length={isDesktop ? 50 : 25} />
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
    </StyledTbody>
  );
};
