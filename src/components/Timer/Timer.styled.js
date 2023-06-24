import styled from 'styled-components';
export const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  @media ${p => p.theme.media.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 32px;
    width: auto;
  }
  @media ${p => p.theme.media.desktop} {
    gap: 74px;
    align-items: start;
  }
`;
