import { AiTwotoneStar } from 'react-icons/ai';
import { FaRegStar } from 'react-icons/fa';
import styled from 'styled-components';

const StarsRatingContainer = styled.div`
  display: flex;
  width: ${p => p.theme[8]}px;
  gap: ${p => p.theme.space[2]}px;
  svg {
    color: ${p => p.theme.colors.accentColor};
    width: ${p => p.theme.space[4]}px;
    height: ${p => p.theme.space[4]}px;
    line-height: 0;
  }
`;

export const ShowRatingStars = ({ rating }) => {
  return (
    <StarsRatingContainer>
      {rating >= 1 ? <AiTwotoneStar /> : <FaRegStar />}
      {rating >= 2 ? <AiTwotoneStar /> : <FaRegStar />}
      {rating >= 3 ? <AiTwotoneStar /> : <FaRegStar />}
      {rating >= 4 ? <AiTwotoneStar /> : <FaRegStar />}
      {rating >= 5 ? <AiTwotoneStar /> : <FaRegStar />}
    </StarsRatingContainer>
  );
};
