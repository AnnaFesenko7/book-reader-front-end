import styled from 'styled-components';

export const StyledTbody = styled.tbody`
  height: ${p => (p.hasScroll ? '150px' : 'auto')};
  min-height: ${p => (p.training ? '150px' : 'auto')};
`;

export const StyledTr = styled.tr`
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media ${p => p.theme.media.tablet} {
    background-color: ${p =>
      p.isTrainingPage ? p.theme.colors.transparent : p.theme.colors.white};
    height: ${p => (p.isTrainingPage ? p.theme.space[6] : p.theme.space[7])}px;
    box-shadow: ${p =>
      p.isTrainingPage ? 'none' : '0px 4px 4px rgba(0, 0, 0, 0.25)'};
  }

  @media ${p => p.theme.media.desktop} {
    height: ${p => (p.isTrainingPage ? p.theme.space[5] : p.theme.space[7])}px;
  }
`;
export const StyledTd = styled.td`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.deepBlue};
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  svg {
    height: auto;
    color: ${p =>
      p.startedTraining
        ? p.theme.colors.accentColor
        : p.status === 'reading'
        ? p.theme.colors.accentColor
        : p.theme.colors.tableIconColor};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[5]}px;
`;
export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  line-height: 0;
`;
