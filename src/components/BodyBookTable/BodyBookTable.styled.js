import styled from 'styled-components';

export const StyledTbody = styled.tbody``;

export const StyledTr = styled.tr`
  padding: 20px 26px 32px 20px;
  margin-left: auto;
  margin-right: auto;

  @media ${p => p.theme.media.tablet} {
    height: 62px;
  }

  @media ${p => p.theme.media.desktop} {
    height: 62px;
  }
`;
export const StyledTd = styled.td`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
  color: #242a37;

  &:first-child {
    margin-bottom: 15px;
    margin-left: 0;
  }
  &:last-child {
    margin-bottom: 32px;
    margin-left: 36px;
  }

  svg {
    width: ${p => p.theme.space[5]}px;
    color: ${p =>
      p.status === 'haveRead'
        ? p.theme.colors.accentColor
        : p.theme.colors.tableIconColor};
  }
`;
