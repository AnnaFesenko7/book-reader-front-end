import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4px;
  @media ${p => p.theme.media.tablet} {
    padding: 64px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 45%;
  }
`;
export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 229px;
  @media ${p => p.theme.media.tablet} {
    width: 520px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 397px;
  }
`;

export const StyledPhrase = styled.p`
  font-size: 13px;
  color: #242a37;
  margin: 0;
  margin-bottom: 16px;
  text-align: center;
  line-height: 1.23;
  @media ${p => p.theme.media.tablet} {
    font-size: 24px;
    margin-bottom: 20px;
    line-height: 1.58;
  }
  @media ${p => p.theme.media.desktop} {
    line-height: 1.67;
  }
`;

export const StyledHr = styled.hr`
  width: 100px;
  color: rgba(36, 42, 55, 0.5);
  margin-bottom: 12px;
  @media ${p => p.theme.media.tablet} {
    width: 150px;
  }
`;
export const StyledAuthor = styled.p`
  margin: 0;
  font-size: 14px;
  color: #898f9f;
  font-weight: 500;
  @media ${p => p.theme.media.tablet} {
    font-size: 24px;
  }
`;
