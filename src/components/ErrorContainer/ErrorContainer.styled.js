import styled from 'styled-components';

export const ErrorContainer = styled.div`
  width: 100%;
  padding: 2px 32px 2px 12px;
  margin-top: ${p => p.theme.space[1]}px;
  color: ${p => p.theme.colors.accentColor};
  height: ${p => p.theme.space[5]}px;
  text-align: left;

  @media ${p => p.theme.media.tablet} {
    padding: 0;
  }
`;
