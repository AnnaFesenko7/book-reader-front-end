import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-top: 14px;
  padding-bottom: 14px;
  width: 100%;
`;

export const LogoLink = styled(Link)`
  text-align: center;
  color: ${p => p.theme.colors.deepBlue};
  font-family: 'Abril Fatface';
  font-weight: ${p => p.theme.fontWeights.normal};

  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.35;
`;

export const PrivateHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: ${p => p.theme.fontWeights.light};
  font-size: ${p => p.theme.fontSizes.s};

  @media ${p => p.theme.media.tablet} {
    width: 450px;
  }
  /* @media ${p => p.theme.media.desktop} {
    width: 700px;
  } */
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${p => p.theme.space[4]}px;
  width: ${p => p.size}px;
  cursor: pointer;
`;

export const ExitButton = styled.button`
  background-color: transparent;
  border: none;
  border-bottom: ${p => `${p.theme.borders.normal} ${p.theme.colors.deepBlue}`};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accentColor};
  }
`;
