import styled from 'styled-components';

export const StyledResumeButton = styled.button`
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.secondBody};
  font-size: ${p => p.theme.fontSizes.s};
  text-align: center;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.tableIconColor};
  width: 127px;
  height: ${p => p.theme.space[6]}px;

  padding-top: 12px;
  padding-bottom: 11px;

  border-radius: ${p => p.theme.radii.sm};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.transparent}`};
  box-shadow: ${p => p.theme.boxShadow.btn};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accentColor};
    border: ${p => `${p.theme.borders.normal} ${p.theme.colors.transparent}`};
  }

  @media ${p => p.theme.media.tablet} {
    width: 80px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 130px;
  }
`;
