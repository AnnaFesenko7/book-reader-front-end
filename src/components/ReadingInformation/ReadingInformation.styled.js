import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 20px 20px 22px 20px;
  gap: 32px;
  background-color: #ffffff;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

  @media ${p => p.theme.media.tablet} {
    flex-direction: row;
    width: 704px;
    margin-bottom: 53px;
  }
  @media ${p => p.theme.media.desktop} {
    flex-direction: column;
    width: 100%;
  }
`;

export const StyledTitle = styled.h2`
  text-transform: uppercase;
  font-size: 12px;
  line-height: 1.25;
  color: ${p => p.theme.colors.deepBlue};
  text-align: center;
  margin-bottom: 12px;

  @media ${p => p.theme.media.tablet} {
    font-size: 14px;
    line-height: 1.21;
  }
`;
