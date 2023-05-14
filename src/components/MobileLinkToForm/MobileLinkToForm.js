import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  position: fixed;
  z-index: 99;
  top: 85%;
  left: 50vw;

  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${p => p.theme.colors.accentColor};
  border: none;
  width: 52px;
  height: 52px;

  border-radius: 50%;
  line-height: 0;

  span {
    width: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.normal};
    color: ${p => p.theme.colors.white};
  }
`;

export const MobileLinkToForm = ({ to }) => {
  return (
    <StyledLink to={to}>
      <span>+</span>
    </StyledLink>
  );
};
