import styled from 'styled-components';
export const StyledSelect = styled.select`
  display: block;
  width: 100%;
  height: 40px;
  padding: 2px 31px 2px 12px;
  background-color: ${p => p.theme.colors.white};
  outline: none;
  border: none;
  margin-bottom: 40px;
  /* color: ${p =>
    p.value === 'Обрати книги з бібліотеки' &&
    `${p.theme.colors.iconColor}`}; */
  color: ${p => console.log(p.value)};
`;

export const Placeholder = styled.option`
  color: ${p => p.theme.colors.iconColor};
`;
export const StyledOption = styled.option`
  color: green;
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
`;
