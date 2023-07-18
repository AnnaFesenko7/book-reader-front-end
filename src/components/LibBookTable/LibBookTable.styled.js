import styled from 'styled-components';

export const WrapperTable = styled.div``;

export const StyledSection = styled.div`
  padding-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  width: ${p => p.theme.mediaWidth.mobile}px;

  @media ${p => p.theme.media.tablet} {
    width: 100%;
    /* width: ${p => p.theme.mediaWidth.tablet}px; */
    margin-bottom: ${p => p.theme.space[6]}px;
    padding-right: 0;
    padding-left: 0;
  }
  @media ${p => p.theme.media.desktop} {
    margin-bottom: ${p => (p.isTrainingPage ? 40 : 0)}px;
    width: 100%;
  }
`;

export const StyledTable = styled.table`
  display: block;
  @media ${p => p.theme.media.tablet} {
    display: table;
    padding-bottom: 40px;
    width: 100%;
    border-spacing: 0 10px;
    padding-bottom: 20px;
  }
  @media ${p => p.theme.media.desktop} {
    padding-bottom: 32px;
  }
`;

export const StyledCaption = styled.caption`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.secondBody};
  color: ${p => p.theme.colors.deepBlue};
  text-align: left;
  margin-bottom: ${p => p.theme.space[5]}px;
  white-space: pre;
`;
