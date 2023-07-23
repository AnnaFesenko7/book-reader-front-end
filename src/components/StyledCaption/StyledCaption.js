import styled from 'styled-components';

export const StyledCaption = styled.h2`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.secondBody};
  color: ${p => p.theme.colors.deepBlue};
  text-align: left;
  white-space: pre;
`;
