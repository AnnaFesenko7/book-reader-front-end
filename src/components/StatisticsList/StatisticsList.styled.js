import styled from 'styled-components';

export const StyledItem = styled.li`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr;
  list-style: none;
  color: ${p => p.theme.colors.deepBlue};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.21;
  margin-bottom: 4px;

  :last-child {
    margin-bottom: 0;
  }
`;
export const StyledCell = styled.span`
  color: ${p =>
    p.pale ? p.theme.colors.notActiveText : p.theme.colors.deepBlue};
  margin-left: auto;
`;
