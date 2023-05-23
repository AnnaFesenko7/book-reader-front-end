import styled from 'styled-components';

export const TrainingContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;

  @media ${p => p.theme.media.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;
