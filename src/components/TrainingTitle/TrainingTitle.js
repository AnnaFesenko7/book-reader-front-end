import styled from 'styled-components';

const StyledTitle = styled.h2`
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.secondBody};

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.backgroundTitle};
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

  @media ${p => p.theme.media.desktop} {
    width: 288px !important;
  }
`;
export const TrainingTitle = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};
