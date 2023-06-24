import styled from 'styled-components';

export const StyledTimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media ${p => p.theme.media.tablet} {
    width: 290px;
  }
`;

export const TimerTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  color: #898f9f;
  margin-bottom: 8px;
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
  height: 60px;

  background: #ffffff;
  box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
  padding-bottom: 8px;
`;
export const StyledItem = styled.p`
  display: flex;
  flex-direction: column;
  margin: 0;
  text-align: center;
  width: 43px;

  :not(:last-child) {
    margin-right: 8px;
  }
`;

export const StyledValue = styled.span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 1.52;

  color: #091e3f;
`;
export const StyledSeparator = styled.span`
  font-weight: 700;
  font-size: 25px;
  line-height: 1.52;
  margin-right: 8px;
`;

export const StyledSpan = styled.span`
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-align: center;

  color: #898f9f;
`;
