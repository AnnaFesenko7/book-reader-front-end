import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.space[4]}px;
  background: ${p => p.theme.colors.backgroundBody};
  max-width: ${p => p.theme.media.phone}px;

  @media screen and (min-width: ${p => p.theme.media.tablet}px) {
    max-width: ${p => p.theme.media.tablet}px;
  }
  /* @media screen and (min-width: 768px) {
    max-width: ${p => p.theme.media.tablet}px;
  } */

  @media screen and (min-width: ${p => p.theme.media.desktop}px) {
    max-width: ${p => p.theme.media.desktop}px;
  }
`;

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
