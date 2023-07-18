import styled from 'styled-components';
export const SiteBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 288px;
  @media ${p => p.theme.media.tablet} {
    width: 100%;
  }
  @media ${p => p.theme.media.desktop} {
    width: 288px;
  }
`;
