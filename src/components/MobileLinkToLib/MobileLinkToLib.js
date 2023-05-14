import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';

const StyledLink = styled(Link)`
  color: ${p => p.theme.colors.accentColor};
  display: block;
  margin-bottom: 40px;
  align-self: start;
  margin-left: 16px;
`;

export const MobileLinkToLib = ({ to }) => {
  return (
    <StyledLink to={to}>
      <FaArrowLeft />
    </StyledLink>
  );
};
