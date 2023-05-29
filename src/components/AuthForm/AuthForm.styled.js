import styled from 'styled-components';
import { Form, Field } from 'formik';
import img1 from 'img/background1.jpg';
import img2 from 'img/background2.jpg';
import img3 from 'img/background3.jpg';

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  background-image: linear-gradient(
      to right,
      rgba(9, 30, 63, 0.8),
      rgba(9, 30, 63, 0.8)
    ),
    url(${img1});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media ${p => p.theme.media.tablet} {
    padding: 65px;
    background-image: linear-gradient(
        to right,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${img2});
  }

  @media ${p => p.theme.media.desktop} {
    padding: 75px;
    background-image: linear-gradient(
        to right,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${img3});
    width: 45%;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  gap: ${p => p.theme.space[3]}px;
  flex-direction: column;
  /* text-align: center; */
  max-width: 280px;

  @media ${p => p.theme.media.tablet} {
    padding: 64px;

    max-width: 400px;
    padding: 40px;
    background-color: #ffffff;
  }
`;
export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  text-align: left;

  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.white};
  margin: 0;
  /* margin-bottom: ${p => p.theme.space[3]}px; */

  @media ${p => p.theme.media.tablet} {
    color: ${p => p.theme.colors.notActiveText};
  }
`;

export const LabelText = styled.span`
  ::after {
    content: '*';
    text-align: center;
    margin-left: 5px;
    color: ${p => p.theme.colors.accentColor};
  }
`;
export const StyledField = styled(Field)`
  padding: 12px 8px;
  min-width: 280px;
  margin-bottom: 10px;
  background: #f5f7fa;
  box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
  outline: none;
  border: none;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: #a6abb9;
  }
  @media ${p => p.theme.media.tablet} {
    padding: 12px 12px;
    min-width: 320px;
  }
`;

export const StyledButton = styled.button`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accentColor};
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.sm};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.transparent}`};
  box-shadow: ${p => p.theme.boxShadow.btn};
  text-align: center;
`;
