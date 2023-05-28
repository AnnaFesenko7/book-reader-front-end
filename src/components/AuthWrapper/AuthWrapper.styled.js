import styled from 'styled-components';
export const AuthWrapper = styled.div`
  display: block;

  @media ${p => p.theme.media.desktop} {
    display: flex;
  }
`;
