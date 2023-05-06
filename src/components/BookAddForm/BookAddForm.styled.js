import { Form, Field } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  width: 280px;
  flex-direction: column;
  display: flex;
  gap: ${p => p.theme.space[4]}px;
  align-items: center;

  @media screen and (min-width: ${p => p.theme.media.table}px) {
    width: 704px;
  }
  @media screen and (min-width: ${p => p.theme.media.desktop}px) {
    width: 1141px;
    flex-direction: row;
    align-items: flex-end;
  }

  svg {
    color: ${p => p.theme.colors.accentColor};
    display: block;
    margin-bottom: 40px;
  }
`;

export const WrapperGroupOfInputs = styled.div`
  width: 280px;
  flex-direction: column;
  display: flex;
  margin-bottom: ${p => p.theme.space[6]}px;

  @media screen and (min-width: 768px) {
    /* @media screen and (min-width: ${p => p.theme.media.table}px) { */
    width: 704px;
    flex-direction: row;
    background-color: 'red';
  }
`;

export const StyledLabel = styled.label`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.notActiveText};
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const StyledField = styled(Field)`
  width: 100%;
  height: ${p => p.theme.space[6]}px;
  margin-top: ${p => p.theme.space[3]}px;

  outline: none;
  box-shadow: ${p =>
    p.name === 'title' && `inset ${p => p.theme.boxShadow.inputTitle}`};
  border: ${({ name, theme }) => {
    return name === 'title'
      ? `${theme.borders.none}`
      : `1px solid ${theme.colors.iconColor} `;
  }};
  background: ${p => p.name !== 'title' && `transparent`};
`;
