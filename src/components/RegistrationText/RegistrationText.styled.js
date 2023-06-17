import styled from 'styled-components';
import { AiOutlineRight } from 'react-icons/ai';

export const Wrapper = styled.div`
  padding: 32px 25px 40px;
  margin-left: auto;
  margin-right: auto;

  @media ${p => p.theme.media.tablet} {
    padding: 64px 120px 88px;
  }
  @media ${p => p.theme.media.desktop} {
    padding: 180px 127px 180px;
    margin: 0;
    margin-right: auto;
  }
`;

export const Title = styled.h1`
  margin-bottom: 32px;
  font-family: 'Abril Fatface';
  font-weight: 400;
  font-size: 34px;
  line-height: 1.12;
  text-align: center;
  color: ${p => p.theme.colors.deepBlue};
  @media ${p => p.theme.media.tablet} {
    margin-bottom: 48px;
  }
  @media ${p => p.theme.media.desktop} {
  }
`;

export const Subtitle = styled.h2`
  margin-bottom: 14px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.9;
  color: ${p => p.theme.colors.deepBlue};
`;
export const Container = styled.div`
  @media ${p => p.theme.media.tablet} {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledList = styled.ul`
  margin-bottom: 24px;
  @media ${p => p.theme.media.tablet} {
    margin-bottom: 32px;
  }
`;

export const StyledItem = styled.li`
  position: relative;
  margin-bottom: 12px;
  padding-left: 16px;
  list-style: none;
`;
export const StyledIcon = styled(AiOutlineRight)`
  position: absolute !important;
  top: 3px;
  left: 0;
  display: block;
  color: ${p => p.theme.colors.accentColor};
`;
export const StyledText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  color: ${p => p.theme.colors.notActiveText};
`;
