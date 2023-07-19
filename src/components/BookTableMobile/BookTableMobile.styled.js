import styled from 'styled-components';

export const StyledList = styled.div`
  gap: ${p => p.theme.space[6]}px;
  /* margin-bottom: ${p => p.theme.space[6]}px; */
`;

export const StyledListItem = styled.div`
  position: relative;
  padding: ${p => p.theme.space[5]}px;
  padding-left: 54px;
  display: flex;
  flex-direction: column;

  box-shadow: ${p =>
    p.isTrainingPage ? 'none' : '0px 4px 4px rgba(0, 0, 0, 0.25)'};
  background-color: ${p =>
    p.isTrainingPage ? p.theme.colors.transparent : p.theme.colors.white};
  margin-bottom: ${p => p.theme.space[4]}px;
  /* margin-bottom: ${p => (p.isTrainingPage ? 0 : p.theme.space[4])}px; */
  width: ${p => (p.isTrainingPage ? '288px' : 'auto')};

  svg {
  }
`;

export const BookIcon = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  color: ${p =>
    p.startedTraining
      ? p.theme.colors.accentColor
      : p.status === 'reading'
      ? p.theme.colors.accentColor
      : p.theme.colors.tableIconColor};
`;

export const StyledTable = styled.table`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
`;

export const StyledBookTitle = styled.caption`
  text-align: start;
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.deepBlue};
`;

export const StyledTr = styled.tr``;

export const StyledTh = styled.th`
  text-align: start;
  color: ${p => p.theme.colors.notActiveText};
  padding-bottom: ${p => p.theme.space[4]}px;
`;

export const StyledTd = styled.td`
  padding-left: ${p => p.theme.space[6]}px;
  text-align: start;
  color: ${p => p.theme.colors.deepBlue};
  padding-bottom: ${p => p.theme.space[4]}px;
`;
export const Wrapper = styled.div`
  display: block;
  justify-content: center;
  align-self: center;
`;
