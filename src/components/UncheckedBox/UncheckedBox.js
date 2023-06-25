import styled from 'styled-components';
export const UncheckedBox = styled.div`
  width: 16px;
  height: 16px;

  border: 1px solid ${p => p.theme.colors.tableIconColor};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;
