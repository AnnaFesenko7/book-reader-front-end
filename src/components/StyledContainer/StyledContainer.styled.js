import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: ${p => p.theme.mediaWidth.phone}px;
  display: flex;
  flex-direction: column;

  /* padding-right: ${p => p.theme.space[4]}px; */

  @media ${p => p.theme.media.tablet} {
    width: ${p => p.theme.mediaWidth.tablet}px;
  }

  @media ${p => p.theme.media.desktop} {
    width: ${p => p.theme.mediaWidth.desktop}px;
  }
`;
