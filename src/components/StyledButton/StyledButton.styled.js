import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: 500;
  color: ${p =>
    p.modal ? `${p.theme.colors.white} ` : `${p.theme.colors.deepBlue}`};
  background-color: ${({ modal, theme }) =>
    modal ? `${theme.colors.accentColor} ` : `${theme.colors.backgroundBody}`};
  padding-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 10px;
  /* box-shadow: ${p => p.theme.boxShadow.main}; */
  border-radius: ${p => p.theme.radii.sm};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.deepBlue}`};
  box-shadow: ${p => p.theme.boxShadow.btn};
  width: ${p => p.size}px;
  height: ${p => p.height}px;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accentColor};
    border: ${p => `${p.theme.borders.normal} ${p.theme.colors.transparent}`};
  }
`;
