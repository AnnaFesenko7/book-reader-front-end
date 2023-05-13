import { AiTwotoneStar } from 'react-icons/ai';
import { FaRegStar } from 'react-icons/fa';
import styled from 'styled-components';

const StarsRatingContainer = styled.div`
  display: flex;
  width: ${p => p.theme[8]}px;
  gap: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.accentColor};
  svg {
    width: ${p => p.theme.space[4]}px;
    height: ${p => p.theme.space[4]}px;
    line-height: 0;
  }
`;

export const ShowRatingStars = ({ rating }) => {
  return (
    <StarsRatingContainer>
      {rating >= 1 ? (
        <AiTwotoneStar color="#FF6B08" />
      ) : (
        <FaRegStar color="#FF6B08" />
      )}
      {rating >= 2 ? (
        <AiTwotoneStar color="#FF6B08" />
      ) : (
        <FaRegStar color="#FF6B08" />
      )}
      {rating >= 3 ? (
        <AiTwotoneStar color="#FF6B08" />
      ) : (
        <FaRegStar color="#FF6B08" />
      )}
      {rating >= 4 ? (
        <AiTwotoneStar color="#FF6B08" />
      ) : (
        <FaRegStar color="#FF6B08" />
      )}
      {rating >= 5 ? (
        <AiTwotoneStar color="#FF6B08" />
      ) : (
        <FaRegStar color="#FF6B08" />
      )}
    </StarsRatingContainer>
  );
};
