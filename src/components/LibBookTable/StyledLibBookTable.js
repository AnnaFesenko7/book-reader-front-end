import styled from 'styled-components';

export const StyledSection = styled.div`
  padding-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  width: 100%;
  @media ${p => p.theme.media.tablet} {
    width: 768px;
    margin-bottom: 40px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 1280px;

    margin-bottom: 40px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
