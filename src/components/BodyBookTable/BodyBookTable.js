import EllipsisText from 'react-ellipsis-text';
import { useMediaQuery } from 'react-responsive';
import { FaBookOpen } from 'react-icons/fa';
import { ShowRatingStars } from 'components/ShowRatingStars/ShowRatingStars';
import { ResumeButton } from 'components/ResumeButton/ResumeButton';
import { StyledTr, StyledTd, Wrapper } from './BodyBookTable.styled';

export const BodyBookTable = ({ books }) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <tbody>
      {books.map(({ _id, status, title, author, year, pages, rating }) => {
        return (
          <StyledTr key={_id}>
            <StyledTd status={status}>
              <Wrapper>
                <FaBookOpen size={'22px'} />
                <EllipsisText text={title} length={isDesktop ? 70 : 50} />
              </Wrapper>
            </StyledTd>
            <StyledTd>
              <EllipsisText text={author} length={isDesktop ? 32 : 18} />
            </StyledTd>
            <StyledTd>{year}</StyledTd>
            <StyledTd>{pages}</StyledTd>
            {status === 'haveRead' && (
              <StyledTd>
                <Wrapper>
                  <ShowRatingStars rating={rating} />
                  <ResumeButton />
                </Wrapper>
              </StyledTd>
            )}
          </StyledTr>
        );
      })}
    </tbody>
  );
};
