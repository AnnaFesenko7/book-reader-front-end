import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  width: ${p => p.theme.mediaWidth.mobile}px;
  display: flex;
  flex-direction: column;
  background-color: ${p =>
    p.header ? p.theme.colors.white : p.theme.colors.backgroundBody};
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */

  @media ${p => p.theme.media.tablet} {
    width: ${p => p.theme.mediaWidth.tablet}px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media ${p => p.theme.media.desktop} {
    width: ${p => p.theme.mediaWidth.desktop}px;
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
  }
`;
