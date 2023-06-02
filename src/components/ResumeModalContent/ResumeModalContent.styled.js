import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  width: 280px;
  padding: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[6]}px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media ${p => p.theme.media.tablet} {
    width: 608px;
  }
  /* @media ${p => p.theme.media.desktop} {
    width: 608px;
  } */
`;

export const StyledLabel = styled.label`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xm};
  line-height: ${p => p.theme.lineHeights.secondBody};
  color: ${p => p.theme.colors.deepBlue};

  display: flex;
  flex-direction: column;
`;

// export const StyledTextarea = styled.div`
//   width: 100%;
//   height: 170px;
//   resize: none;
//   border: 1px solid #a6abb9;
// `;

export const BtnWrapper = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;
  width: 100%;

  @media ${p => p.theme.media.tablet} {
    width: 290px;
  }
`;
