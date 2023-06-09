import { Form, Field } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  width: 100%;
  flex-direction: column;
  display: flex;
  gap: ${p => p.theme.space[4]}px;
  align-items: center;
  justify-content: flex-start;

  padding-bottom: 110px;
  padding-top: 32px;

  @media ${p => p.theme.media.tablet} {
    padding-top: 32px;
    padding-bottom: 40px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 100%;
    flex-direction: row;
    padding-top: ${p => p.theme.space[6]}px;
  }
`;

export const WrapperGroupOfInputs = styled.div`
  width: 280px;
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;

  @media ${p => p.theme.media.tablet} {
    width: 704px;
    flex-direction: row;
    justify-content: space-between;
  }
  @media ${p => p.theme.media.desktop} {
    width: 930px;
    flex-wrap: nowrap;
    gap: ${p => p.theme.space[4]}px;
    margin-right: ${p => p.theme.space[7]}px;
  }
`;

export const StyledLabel = styled.label`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.notActiveText};
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  white-space: pre;
  @media ${p => p.theme.media.tablet} {
    width: ${p => setSizeForMediaTablet(p.htmlFor)}px;
  }

  @media ${p => p.theme.media.desktop} {
    width: ${p => setSizeForMediaDesktop(p.htmlFor)}px;
  }
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

  @media ${p => p.theme.media.tablet} {
    width: ${p => setSizeForMediaTablet(p.name)}px;
  }

  @media ${p => p.theme.media.desktop} {
    width: ${p => setSizeForMediaDesktop(p.name)}px;
  }
`;
const setSizeForMediaTablet = name => {
  switch (name) {
    case 'title':
      return 704;
    case 'author':
      return 336;
    default:
      return 152;
  }
};

const setSizeForMediaDesktop = name => {
  switch (name) {
    case 'title':
      return 346;
    case 'author':
      return 250;
    default:
      return 134;
  }
};

export const ButtonContainer = styled.div`
  width: 170px;
  height: 40px;
`;
