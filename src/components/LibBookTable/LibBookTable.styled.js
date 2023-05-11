import styled from 'styled-components';

export const StyledSection = styled.div`
  padding-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  width: 100%;
  @media ${p => p.theme.media.tablet} {
    width: ${p => p.theme.mediaWidth.tablet}px;
    margin-bottom: 40px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media ${p => p.theme.media.desktop} {
    width: ${p => p.theme.mediaWidth.desktop}px;
    margin-bottom: 40px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0 10px;
  @media ${p => p.theme.media.desktop} {
    /* border-spacing: 10px 10px; */
  }
`;

export const StyledCaption = styled.caption`
  font-weight: 600;
  font-size: 19px;
  line-height: 1.21;
  color: #242a37;
  text-align: left;

  margin: 0 0 24px 0;
`;
