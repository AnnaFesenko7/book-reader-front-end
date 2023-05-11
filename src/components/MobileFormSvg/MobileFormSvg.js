import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
const SvgContainer = styled.div`
  color: ${p => p.theme.colors.accentColor};
  display: block;
  margin-bottom: 40px;
  align-self: start;
  margin-left: 16px;
`;

export const {
  MobileFormSvg,
} = () => {
  return (
    <SvgContainer>
      <FaArrowLeft />
    </SvgContainer>
  );
};
