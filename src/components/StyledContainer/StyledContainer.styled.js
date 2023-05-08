import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: ${p => p.theme.mediaWidth.phone}px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${p => p.theme.media.tablet} {
    width: ${p => p.theme.mediaWidth.tablet}px;
  }

  @media ${p => p.theme.media.desktop} {
    width: ${p => p.theme.mediaWidth.desktop}px;
  }
`;
export const SvgContainer = styled.div`
  color: ${p => p.theme.colors.accentColor};
  display: block;
  margin-bottom: 40px;
  align-self: start;
  margin-left: 16px;
`;
