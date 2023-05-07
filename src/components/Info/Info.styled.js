import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  background: ${p => p.theme.colors.white};
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.space[7]}px;
  box-shadow: ${p => p.theme.boxShadow.infoBox};
  @media ${p => p.theme.media.tablet} {
    width: 608px;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-self: center;
  gap: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Step = styled.h2`
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 22px;
  margin-bottom: 16px;
`;

export const StepTitle = styled.h3`
  display: flex;
  font-size: ${p => p.theme.fontSizes.xm};
  line-height: 17px;
  gap: ${p => p.theme.space[3]}px;
  margin-bottom: 8px;

  svg {
    color: ${p => p.theme.colors.notActiveText};
  }
`;

export const StyledText = styled.p`
  display: flex;
  font-weight: 400;
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.notActiveText};
  margin-left: ${p => p.theme.space[5]}px;
  display: flex;

  svg {
    color: ${p => p.theme.colors.accentColor};
  }
`;
