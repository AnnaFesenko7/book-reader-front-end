import styled from 'styled-components';
export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${p => p.theme.media.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
