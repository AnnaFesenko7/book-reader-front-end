import styled from 'styled-components';
import DateView from 'react-datepicker';
import { Form } from 'formik';

export const StyledDateView = styled(DateView)`
  height: 42px;
  width: 110px;
  background-color: #f6f7fb;
  border: 1px solid #a6abb9;
  padding-top: 12px;
  padding-left: 13px;
  padding-bottom: 13px;
  color: #242a37;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.21;
  outline: none;
`;

export const StyledField = styled.div`
  height: 42px;
  width: 110px;
  background-color: #f6f7fb;
  border: 1px solid #a6abb9;
  padding-top: 12px;
  padding-left: 13px;
  padding-bottom: 13px;
  color: #242a37;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.21;
`;
export const styleForPageInput = {
  width: '100%',
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
};
export const StyledInputsWrapper = styled.div`
  display: flex;
  margin-bottom: 28px;
  justify-content: space-between;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 11px;
  font-weight: 500;
  line-height: 1.18;
  color: #242a37;
`;
export const StyledForm = styled(Form)`
  display: flex;
  /* align-items: center; */

  flex-direction: column;

  width: 100%;
`;
