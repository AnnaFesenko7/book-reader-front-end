import styled from 'styled-components';

export const TrainingContainer = styled.div`
  display: flex;
  flex-direction: ${p => (p.trainingStarted ? 'column' : 'column-reverse')};
  gap: 20px;

  @media ${p => p.theme.media.tablet} {
    width: 704px;
  }
  @media ${p => p.theme.media.desktop} {
    flex-direction: row;
    justify-content: space-between;
    padding: ${p => p.theme.space[5]}px;
    width: 100%;
  }
`;
