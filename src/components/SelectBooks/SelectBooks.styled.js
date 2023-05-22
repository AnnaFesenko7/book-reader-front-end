import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media ${p => p.theme.media.tablet} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  select {
    display: block;
    width: 100%;
    height: 40px;
    padding: 2px 32px 2px 12px;
    background-color: ${p => p.theme.colors.white};
    outline: none;
    border: none;
    color: ${p => p.theme.colors.deepBlue};

    @media ${p => p.theme.media.tablet} {
      width: 483px;
    }
    @media ${p => p.theme.media.desktop} {
      width: 715px;
    }
  }
`;
export const Wrapper = styled.div`
  width: 100%;

  @media ${p => p.theme.media.tablet} {
    width: 483px;
  }

  @media ${p => p.theme.media.desktop} {
    width: 715px;
  }
`;
