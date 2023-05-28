import styled from 'styled-components';

export const WarningText = styled.div`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xm};
  line-height: ${p => p.theme.lineHeights.body};
  text-align: center;
  margin-bottom: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.deepBlue};
  width: 288px;
`;

export const WrapperModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;
