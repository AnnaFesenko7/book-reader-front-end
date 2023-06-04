import styled from 'styled-components';

export const StyledTbody = styled.tbody``;

export const StyledTr = styled.tr`
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media ${p => p.theme.media.tablet} {
    height: ${p => p.theme.space[7]}px;
  }

  /* @media ${p => p.theme.media.desktop} {
    height: ${p => p.theme.space[7]}px;
  } */
`;
export const StyledTd = styled.td`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.deepBlue};
  padding-left: ${p => p.theme.space[5]}px;
  svg {
    height: auto;
    color: ${p =>
      p.status === 'reading'
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
