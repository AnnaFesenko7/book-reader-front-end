import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p =>
    p.active ? `${p.theme.colors.white} ` : `${p.theme.colors.deepBlue}`};
  background-color: ${({ active, theme }) =>
    active ? `${theme.colors.accentColor} ` : `${theme.colors.backgroundBody}`};
  padding-top: 10px;
  padding-left: auto;
  padding-right: auto;
  padding-bottom: 10px;
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
