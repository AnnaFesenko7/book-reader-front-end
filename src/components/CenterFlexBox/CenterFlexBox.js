import styled from 'styled-components';

export const CenterFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  gap: ${p => p.theme.space[5]}px;

  @media ${p => p.theme.media.tablet} {
    padding-top: 0;
    gap: ${p => p.theme.space[6]}px;
  }
  @media ${p => p.theme.media.desktop} {
    /* gap: ${p => p.theme.space[6]}px; */
    gap: 0;
  }
`;
