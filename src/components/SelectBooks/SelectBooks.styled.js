import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  select {
    display: block;
    width: 100%;
    height: 40px;
    padding: 2px 32px 2px 12px;
    background-color: ${p => p.theme.colors.white};
    outline: none;
    border: none;
    color: ${p => p.theme.colors.deepBlue};
  }
`;
